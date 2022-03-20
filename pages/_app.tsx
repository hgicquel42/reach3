import axios from 'axios'
import { Fetch42Context, Fetch42Provider } from 'libs/fetch'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { useCallback, useContext, useState } from 'react'
import '../styles/globals.css'

declare global {
	interface Window {
		ethereum: any
	}
}

async function _upload(content: any) {
	const url = "https://api.starton.io/v2/pinning/content/json"
	const headers = { "x-api-key": 'AMNc51KYHNSBdWjLAtUV7AnXN0q4XWNR' }
	
	const res = await axios.post(url, {
		"name": "metadata.json",
		"content": content
	}, { headers })

	const id = res.data.requestid
	
	let i: NodeJS.Timer;

	return await new Promise((ok,err) => {
		const url = `https://api.starton.io/v2/pinning/content/${id}`

		i = setInterval(async () => {
			const res = await axios.get(url, { headers })
			if (res.data.status !== "COMPLETED") return
			ok(res.data.pinStatus.pin.cid)
		}, 1000)
	}).finally(() => clearInterval(i)) as string
}

async function _mint(hash: string){
	const url = "https://api.starton.io/v2/smart-contract/polygon-mumbai/0x7E1A7b29a2CB8af9A0639bD4801A91d5aCb20755/call"
	const headers = {"x-api-key": 'AMNc51KYHNSBdWjLAtUV7AnXN0q4XWNR' }

	axios.post(url, {
		"functionName": 'mintChad',
		"signerWallet": '0x925dFc2555Cb249519484352577c034011D57efA',
		"speed": "low",
		"params": [
				'0xA08377760EcD517D7c2DD63D4Db1Cb7A54bC3215',
				'12345', 
				hash 
		]
	}, { headers })
}

interface Project {
	project: { name: string }
	final_mark: number,
}

function _App({ Component, pageProps }: AppProps) {
	const fetch42 = useContext(Fetch42Context)!
	const [account, setAccount] = useState<string>()
	const [success, setSuccess] = useState(false)

	const connect = useCallback(async () => {
		const { ethereum } = window
		if (!ethereum) return 
		const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
		setAccount(accounts[0])
	}, [])

	const mint = useCallback(async () => {
		if (!account || !fetch42) return
		const url = "/v2/users/91690/projects_users?filter[project_id]=1983"
		const [inception] = await fetch42(url) as Project[]
		const name = inception.project.name
		const grade = inception.final_mark
		const hash = await _upload({ name, grade })
		await _mint(hash)
		setSuccess(true)
	}, [account, fetch42])

  return (
		<div className="p-4 h-full">
			<div className="h-32" />
			<div className="p-4 rounded-xl bg-white w-full max-w-4xl m-auto">
				<header className="">
					<Link href="/" passHref>
						<a className="flex items-center text-7xl w-full text-center font-sans font-bold">
							<img className="h-16 w-16 rounded-full"
							src="https://o.remove.bg/downloads/c00c03fe-4e88-4845-a6fa-fb8631e41712/Sans_titre-removebg-preview.png" />
							vocation3
						</a>
					</Link>
					<div className="my-2" />
					<nav className="flex items-center bg-[#4169E1] p-4 rounded-xl">
						<Link href="/" passHref>
							<a className="block text-white hover:text-teal-900 mr-4">
								Ecole 42
							</a>
						</Link>
						{/* <Link href={`/test`} passHref */}
						<Link href= "/epitech" passHref>
							<a className="block text-white hover:text-teal-900 mr-4"> 
								Epitech
							</a>
						</Link>
						<Link href= "/sciencespo" passHref>
							<a className="block text-white hover:text-teal-900 mr-4">
								SciencesPo
							</a>
						</Link>	
						<div className="grow" />
						{account
							? <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
								onClick={mint}>
								Ajouter un projet
							</button>
							: <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
								onClick={connect}>
								Se connecter
							</button>}
					</nav>
					<div className="my-2" />
					<nav className="w-full bg-contrast rounded-xl p-4">
						<input className="w-full bg-transparent outline-none"
							placeholder="Rechercher un profil"/>
					</nav>
				</header>
				<div className="my-4" />
				<article className="">
					<Component {...pageProps} />
				</article>
				<div className="w-full border-b border-contrast" />
				<div className="flex bg-contrast p-6 rounded-xl text-sm">
					<a className="hover:underline"
					href="https://www.starton.io/"
					target="_blank" rel="noreferrer">
						© Powered by Starton.
					</a>
					<div className="grow"/>
					<a className="hover:underline"
					href="#">
						Contact
					</a>
				</div>
			</div>
		</div>
	)
}



export default function MyApp(props: AppProps) {

	return <Fetch42Provider>
		<_App {...props} />
	</Fetch42Provider>
}

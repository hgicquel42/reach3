import axios from 'axios'
import { Fetch42Context, Fetch42Provider, jsonfetch } from 'libs/fetch'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { useCallback, useContext, useState } from 'react'
import '../styles/globals.css'

declare global {
	interface Window {
		ethereum: any
	}
}

async function lastID() {
	// TODO
}

async function _upload(content: any){
	const url = "https://api.starton.io/v2/pinning/content/json"
	const headers = { "x-api-key": 'AMNc51KYHNSBdWjLAtUV7AnXN0q4XWNR' }
	
	const body = {
		"name": "metadata.json",
		"content": content
	}
	const res = await axios.post(url, body, { headers})
	// const json = await jsonfetch(url, { method: "POST", headers, body })
	console.log(res.data)
	return res.data.pinStatus.pin.cid as string
}

async function _mint(hash: string){
	const url = "https://api.starton.io/v2/smart-contract/polygon-mumbai/0x7E1A7b29a2CB8af9A0639bD4801A91d5aCb20755/call"
	const headers = {"x-api-key": 'AMNc51KYHNSBdWjLAtUV7AnXN0q4XWNR' }

	const jsonbody = {
		"functionName": 'mintChad',
		"signerWallet": '0x925dFc2555Cb249519484352577c034011D57efA',
		"speed": "low",
		"params": [
				'0xA08377760EcD517D7c2DD63D4Db1Cb7A54bC3215', // address 0x0000000000000000000000000000000000000000
				'12345', // uint256 42
				hash // string 'my hash'
		]
	}

	const body = Object.assign(new URLSearchParams(), jsonbody)

	await jsonfetch(url, { method: "POST", headers, body })
}

interface Project {
	project: { name: string }
	final_mark: number,
}

function _App({ Component, pageProps }: AppProps) {
	const fetch42 = useContext(Fetch42Context)!
	const [account, setAccount] = useState<string>()

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
	}, [account, fetch42])

  return (
		<div className="p-4 h-full">
			<div className="h-32" />
			<div className="p-4 rounded-xl bg-white w-full max-w-4xl m-auto">
			<header className="">
				<Link href="/" passHref>
					<a className="text-7xl text-center font-sans font-bold">
						Vocation 3.0
					</a>
				</Link>
				<div className="my-2" />
				<nav className="flex items-center justify-between flex-wrap bg-[#4169E1] p-6 rounded-xl">
					<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto md:block md:w-auto">
						<div className="flex text-sm lg:flex-grow space-x-4 md:space-x-8 md:mt-0 md:text-sm md:font-medium">
							<Link href="/" passHref>
								<a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200   hover:text-white">
									Ecole 42
								</a>
							</Link>
							{/* <Link href={`/test`} passHref */}
							<Link href= "/epitech" passHref>
								<a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200   hover:text-white"> 
									Epitech
								</a>
							</Link>
							<Link href= "/sciencespo" passHref>
								<a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200   hover:text-white">
									SciencesPo
								</a>
							</Link>	
						</div>
				
				
						{account
						? <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
							onClick={mint}>
							Ajouter un projet
						</button>
						: <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
							onClick={connect}>
							Se connecter
						</button>}
					</div>
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
			</div>
		</div>
	)
}



export default function MyApp(props: AppProps) {

	return <Fetch42Provider>
		<_App {...props} />
	</Fetch42Provider>
}

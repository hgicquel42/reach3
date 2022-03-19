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

async function lastID() {
	// TODO
}

async function upload(){

}

async function mint(hash: string){
	const url = "/smart-contract/polygon-mumbai/0x7E1A7b29a2CB8af9A0639bD4801A91d5aCb20755/call"
	const headers = {"x-api-key": 'AMNc51KYHNSBdWjLAtUV7AnXN0q4XWNR' }
	const body = JSON.stringify({
		"functionName": 'mintChad',
		"signerWallet": '0x925dFc2555Cb249519484352577c034011D57efA',
		"speed": "low",
		"params": [
				'0xA08377760EcD517D7c2DD63D4Db1Cb7A54bC3215', // address 0x0000000000000000000000000000000000000000
				'12345', // uint256 42
				hash // string 'my hash'
		]
	})

	return await fetch(url, { method: "POST", headers, body })
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
		const [inception] = await fetch42<Project[]>("/v2/users/91690/projects_users?filter[project_id]=1983")

	}, [account, fetch42])

  return (
		<div className="p-4 h-full">
			<div className="h-32" />
			<div className="p-4 rounded-xl bg-white w-full max-w-4xl m-auto">
			<header className="">
				<Link href="/" passHref>
					<a className="text-7xl text-center font-mono font-bold">
						Cursus3.io
					</a>
				</Link>
				<div className="my-2" />
				<nav className="flex items-center justify-between flex-wrap bg-[#4169E1] p-6 rounded-xl">
					<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
						<div className="flex text-sm lg:flex-grow space-x-4">
							<Link href="/" passHref>
								<a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
									Ecole 42
								</a>
							</Link>
							<Link href="/" passHref>
								<a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
									Epitech
								</a>
							</Link>
							<Link href="/" passHref>
								<a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
									SciencesPo
								</a>
							</Link>	
						</div>
						<div class="inline-flex rounded-md shadow-sm" role="group">
								<button type="button" class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
								<svg
								class="w-6 h-6 text-blue-500 fill-current"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512">
								<path
									d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
								></path>
							</svg>
								</button>
								<button type="button" class="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
								<svg
								class="w-6 h-6 text-blue-500 fill-current"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24">
								<path
									d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
								></path>
								</svg>
								</button>
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

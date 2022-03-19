import { Fetch42Provider } from 'libs/fetch'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { useCallback, useState } from 'react'
import '../styles/globals.css'

declare global {
	interface Window {
		ethereum: any
	}
}

export default function MyApp({ Component, pageProps }: AppProps) {
	const [account, setAccount] = useState<string>()

	const connect = useCallback(async () => {
		const { ethereum } = window
		if (!ethereum) return 
		const accounts = ethereum.request({ method: 'eth_requestAccounts' });
		setAccount(accounts[0])
	}, [])

	const mint = useCallback(() => {
		if (!account) return
		// TODO
	}, [account])
  
  return (
		<div className="p-4 h-full">
			<div className="h-32" />
			<div className="p-4 rounded-xl bg-white w-full max-w-4xl m-auto">
			<header className="">
				<Link href="/" passHref>
					<a className="text-8xl m-auto font-sans font-bold">
						Cursus3.io
					</a>
				</Link>
				<div className="my-2" />
				<nav className="flex items-center justify-between flex-wrap bg-blue-800 p-6 rounded-xl">
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
						{account
						? <button className="grow inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
							onClick={mint}>
							Ajouter un projet
						</button>
						: <button className="grow inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
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
				<Fetch42Provider>
					<Component {...pageProps} />
				</Fetch42Provider>
			</article>
			</div>
		</div>
	)
}

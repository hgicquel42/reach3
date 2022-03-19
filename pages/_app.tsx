import { Fetch42Provider } from 'libs/fetch'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { ChangeEvent, useCallback, useState } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const [search, setSearch] = useState<string>()

	const updateSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
  }, [])
  
  return (
		<div className="p-4 h-full">
			<div className="h-32" />
			<header className="w-full max-w-xl m-auto">
				<Link href="/" passHref>
					<a className="text-8xl m-auto font-bold">
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
						<button className="grow inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
							Se connecter
						</button>
					</div>
				</nav>
				<div className="my-2" />
				<nav className="w-full bg-contrast rounded-xl p-4">
					<input className="w-full bg-transparent outline-none"
						placeholder="Rechercher un profil"
						value={search}
						onChange={updateSearch}	/>
				</nav>
			</header>
			<div className="my-4" />
			<article className="w-full max-w-4xl m-auto">
				<Fetch42Provider>
					<Component {...pageProps} />
				</Fetch42Provider>
			</article>
		</div>
	)
}

export default MyApp

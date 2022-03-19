import { Fetch42Provider } from 'libs/fetch'
import type { AppProps } from 'next/app'
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
				<h1 className="text-8xl m-auto font-bold">
					Cursus3.io
				</h1>
				<nav className="flex items-center justify-between flex-wrap bg-blue-800 p-6 rounded-xl">
					<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
						<div className="text-sm lg:flex-grow">
							<a
								href="#responsive-header"
								className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
								Test1
							</a>
							<a
								href="#responsive-header"
								className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
								Test2
							</a>
						</div>
						<div>
							<a
								href="#"
								className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
								Espace Candidat
							</a>
						</div>
					</div>
				</nav>
				<div className="my-2" />
				<nav className="w-full">
					<input className="w-full bg-contrast rounded-xl p-4"
						placeholder="Rechercher un profil"
						value={search}
						onChange={updateSearch}	/>
				</nav>
			</header>
			<Fetch42Provider>
      	<Component {...pageProps} />
			</Fetch42Provider>
		</div>
	)
}

export default MyApp

import { Fetch42Provider } from 'libs/fetch'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import { ChangeEvent, useCallback, useState } from 'react'
import logo from "../public/assets/fusee.png"
import '../styles/globals.css'


function MyApp({ Component, pageProps }: AppProps) {
  const [search, setSearch] = useState<string>()

	const updateSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
  }, [])
  
  return (
		<div className="p-4 h-full">
			<div className="h-32" />
			<div className="w-full max-w-xl m-auto">
				<h1 className="text-8xl m-auto font-bold">
					Cursus3.io
				</h1>

				<nav className="flex items-center justify-between flex-wrap bg-blue-800 p-6">
					<div className="flex items-center flex-shrink-0 text-white mr-6">
						<Image src={logo} width="100" height="50" />

						<span className="font-semibold text-xl tracking-tight">
							Chad3.io
						</span>
					</div>
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
				<div className="w-full">
					<input className="w-full bg-contrast rounded-xl p-4"
						placeholder="Rechercher un profil"
						value={search}
						onChange={updateSearch}	/>
				</div>
			</div>
			<Fetch42Provider>
      	<Component {...pageProps} />
			</Fetch42Provider>
		</div>
	)
}

export default MyApp

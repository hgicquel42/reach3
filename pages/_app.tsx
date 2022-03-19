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
			<div className="w-full max-w-xl m-auto">
				<h1 className="text-8xl m-auto font-bold">
					Cursus3.io
				</h1>
				<div className="my-2" />
				<div className="w-full">
					<input className="w-full bg-contrast rounded-xl p-4"
						placeholder="Rechercher un profil"
						value={search}
						onChange={updateSearch}	/>
				</div>
			</div>
      <Component {...pageProps} />
		</div>
	)
}

export default MyApp

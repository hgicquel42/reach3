import type { NextPage } from "next"
import { ChangeEvent, useCallback, useState } from "react"
import { jsonfetch, tfetch42 } from "../libs/fetch"
import { useGET } from "../libs/react/fetch"

export interface TokenRes {
	access_token: string
}

function useToken() {
	const res = useGET<TokenRes>("/api/token", jsonfetch)
	return res?.access_token
}

function use42(token?: string) {
	return useCallback(async (url: string) => {
		if (token) return	await tfetch42(url, token)
	}, [token])
}

const Home: NextPage = () => {
	const [search, setSearch] = useState<string>()

	const updateSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
	}, [])

	const token = useToken()
	const fetch42 = use42(token)

	const apps = useGET("/v2/apps", fetch42)

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
		</div>
	)
}

export default Home

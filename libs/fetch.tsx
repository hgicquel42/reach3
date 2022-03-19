import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react"

async function httperr(res: Response) {
	return Error(`${res.status} ${await res.text()}`)
}

export async function jsonfetch(url: string, options?: RequestInit) {
	const res = await fetch(url, options)
	if (!res.ok) throw httperr(res)
	const text = await res.text()
	if (text) return JSON.parse(text)
}

export type Fetcher<T = any> = 
	(url: string) => Promise<T>

export function useGET<T>(url: string, fetcher: Fetcher<T>) {
	const [state, setState] = useState<T>()

	const fetch = useCallback(async () => {
		setState(await fetcher(url))
	}, [url, fetcher])

	useEffect(() => {
		fetch().catch(console.error)
	}, [fetch])

	return state
}

export const Fetch42Context =
	createContext<Fetcher | undefined>(undefined)

export function Fetch42Provider(props: {
	children?: ReactNode
}){
	const token = useGET<{
    access_token?: string
  }>("/api/token", jsonfetch)?.access_token

	const fetcher = useCallback<Fetcher>(async (path: string) => {
    if (!token) return
    const corsurl = `https://api.intra.42.fr${path}`
    const trueurl = `/api/decors?url=${corsurl}`
    const headers = { Authorization: `Bearer ${token}` }
		return await jsonfetch(trueurl, { headers})
	}, [token])

	return <Fetch42Context.Provider value={fetcher}>
		{props.children}
	</Fetch42Context.Provider>
} 

export function use42<T>(path: string){
	const fetcher = useContext(Fetch42Context)!
	return useGET<T>(path, fetcher)
}
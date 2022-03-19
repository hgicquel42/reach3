import { useCallback } from "react"
import { useGET } from "./react/fetch"

async function httperr(res: Response) {
	return Error(`${res.status} ${await res.text()}`)
}

export async function jsonfetch(url: string, options?: RequestInit) {
	const res = await fetch(url, options)
	if (!res.ok) throw httperr(res)
	const text = await res.text()
	if (text) return JSON.parse(text)
}

export function use42Token() {
	const res = useGET<{
    access_token?: string
  }>("/api/token", jsonfetch)
	return res?.access_token
}

export function use42(token?: string) {
	return useCallback(async (path: string) => {
    if (!token) return
    const corsurl = `https://api.intra.42.fr${path}`
    const trueurl = `/api/decors?url=${corsurl}`
    const headers = { Authorization: `Bearer ${token}` }
		return	await jsonfetch(trueurl, { headers})
	}, [token])
}

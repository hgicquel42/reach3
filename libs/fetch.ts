async function httperr(res: Response) {
	return Error(`${res.status} ${await res.text()}`)
}

export async function jsonfetch(url: string, options?: RequestInit) {
	const res = await fetch(url, options)
	if (!res.ok) throw httperr(res)
	const text = await res.text()
	if (text) return JSON.parse(text)
}

export async function fetch42(path: string, token: string) {
	const base = "https://api.intra.42.fr"
	return await jsonfetch(`/api/decors?url=${base + path}`, {
		headers: { Authorization: `Bearer ${token}` }
	})
}

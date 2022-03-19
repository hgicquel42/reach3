import { useCallback, useEffect, useState } from "react"

export function useGET<T>(url: string, fetcher: (url: string) => Promise<T>) {
	const [state, setState] = useState<T>()

	const fetch = useCallback(async () => {
		setState(await fetcher(url))
	}, [url, fetcher])

	useEffect(() => {
		fetch()
	}, [fetch])

	return state
}

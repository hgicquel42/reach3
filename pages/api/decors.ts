// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const url = req.query.url
	if (Array.isArray(url)) throw Error()

	const { authorization } = req.headers
	const headers = JSON.parse(JSON.stringify({ authorization }))
	const res2 = await fetch(url, { method: req.method, headers })
	if (!res2.ok) return res.status(500).json({})

	const text = await res2.text()
	// console.log("decors", url, text)
	const json = JSON.parse(text)

	res.status(res2.status).json(json)
}

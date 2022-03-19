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
	console.log(url, headers)

	res.status(res2.status).json(await res2.json())
}

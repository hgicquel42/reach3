// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"

const API_UID =
	"c9888ee65a7ef8c94d998465ea37c602ae5ff8281dacc42b9dc6f35d26185bc0"
const API_SECRET =
	"6967697a927fb6b29a658c321458b657d6dbd7e27012f7b670a7453e3e19a37d"

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const url = "https://api.intra.42.fr/oauth/token"
	const body = `grant_type=client_credentials&client_id=${API_UID}&client_secret=${API_SECRET}`
	const headers = { "Content-Type": "application/x-www-form-urlencoded" }
	const res2 = await fetch(url, { method: "POST", body, headers })

	res.status(res2.status).json(await res2.json())
}

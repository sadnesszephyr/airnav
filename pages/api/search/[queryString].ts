import type { NextApiRequest, NextApiResponse } from 'next'
import { JSDOM } from 'jsdom'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { queryString } = req.query

	const shedule = await (
		await fetch(`https://api.rasp.yandex.net/v3.0/schedule/?apikey=${process.env.YANDEX_KEY}&station=s9600213`)
	).json()

	console.log(JSON.stringify(shedule, null, 2))

	res.status(200).json(shedule)
}

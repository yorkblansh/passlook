import { serverIP } from '../../../utils/serverIP'

export const createPlatform = async (platformName: string) => {
	let response: Response
	try {
		response = await fetch(`http://${serverIP()}:85/barcoder/create_invoice`, {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({
				platformName,
			}),
		})
	} catch (error) {
		console.log({ createInvoice_FETCH_ERROR: error })
	}
}

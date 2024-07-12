import { serverIP } from '../../../utils/serverIP'
import type { GetInfoDto } from '../../../../../api/src/dto/getInfoDto'

export const getAllUserInfo = async (props: GetInfoDto) => {
	const {
		appPassword,
		department,
		email,
		name,
		password,
		platform,
		position,
		secondName,
		surname,
	} = props

	let response: Response
	try {
		response = await fetch(`http://${serverIP()}:85/barcoder/create_invoice`, {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({
				appPassword,
				department,
				email,
				name,
				password,
				platform,
				position,
				secondName,
				surname,
			}),
		})
	} catch (error) {
		console.log({ createInvoice_FETCH_ERROR: error })
	}
}

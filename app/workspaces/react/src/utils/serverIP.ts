const SERVER_IP = process.env.SERVER_IP
const NODE_ENV = process.env.NODE_ENV as 'development' | 'production'

export const serverIP = () =>
	NODE_ENV === 'development' ? 'localhost' : SERVER_IP

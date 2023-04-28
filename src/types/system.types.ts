export type TUser = {
	name: string,
	password: string
}

export type TLoginUser = {
	method: string,
	data: TUser
}

export type TLoginResponse = {
	token: string,
	success: boolean
}
export type TFile = {
	name: string,
	fileSize: number,
	type: 'FILE' | 'DIR' | 'SYS'
}

export type TFilesList = {
	list: Array<TFile>
}
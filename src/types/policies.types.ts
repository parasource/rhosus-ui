export type TPolicy = {
	name: string,
	paths: Array<TPolicyPath>
}

export type TPolicyPath = {
		path: string,
		capabilities: TCapabilities
}

export type TPoliciesList = {
	policies: [
		{
			name: string,
			paths: Array<TPolicyPath>
		}
	]
}

export type TCapabilities = 'deny' | 'create' | 'read' | 'update' | 'delete' | 'list' | 'sudo'
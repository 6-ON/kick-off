
export interface ResponseIncidents {
	incidents: Incident[]
}

export interface Incident {
	text?: string
	homeScore?: number
	awayScore?: number
	isLive?: boolean
	time: number
	addedTime?: number
	reversedPeriodTime: number
	incidentType: string
	playerIn?: Assist1
	playerOut?: Assist1
	id?: number
	timeSeconds?: number
	isHome?: boolean
	incidentClass?: string
	reversedPeriodTimeSeconds?: number
	length?: number
	player?: Assist1
	reason?: string
	rescinded?: boolean
	assist1?: Assist1
}

export interface Assist1 {
	name: string
	firstName?: string
	lastName?: string
	slug: string
	shortName: string
	position: string
	userCount: number
	id: number
	jerseyNumber?: string
}

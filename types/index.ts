
export interface SofascoreResponse {
	events: Match[]
}
export interface SofascoreMatchResponse {
	event: Match
}

export interface TournamentsResponse {
	uniqueTournaments: UniqueTournament[]
}
export interface Match {
	tournament: Tournament
	season: Season
	roundInfo?: RoundInfo
	customId: string
	status: Status
	winnerCode?: number
	homeTeam: Team
	awayTeam: Team
	homeScore: Score
	awayScore: Score
	coverage?: number
	time: Time
	changes: Changes
	hasGlobalHighlights: boolean
	hasEventPlayerStatistics?: boolean
	hasEventPlayerHeatMap?: boolean
	detailId?: number
	crowdsourcingDataDisplayEnabled: boolean
	id: number
	crowdsourcingEnabled: boolean
	startTimestamp: number
	slug: string
	finalResultOnly: boolean
	isEditor: boolean
	previousLegEventId?: number
	awayRedCards?: number
	aggregatedWinnerCode?: number
	statusTime?: StatusTime
	lastPeriod?: string
	homeRedCards?: number
}

export interface Score {
	current?: number
	display?: number
	period1?: number
	period2?: number
	normaltime?: number
	aggregated?: number
	extra1?: number
	overtime?: number
	extra2?: number
	penalties?: number
}

export interface Team {
	name: string
	slug: string
	shortName: string
	sport: Sport
	userCount: number
	nameCode: string
	disabled?: boolean
	national: boolean
	type: number
	id: number
	country: Country
	subTeams: any[]
	teamColors: TeamColors
	fieldTranslations?: FieldTranslations
	gender?: string
	venue?: Venue
}

export interface Country {
	alpha2?: string
	name?: string
}

export interface FieldTranslations {
	nameTranslation: NameTranslation
	shortNameTranslation: ShortNameTranslation
}

export interface NameTranslation {
	ar: string
}

export interface ShortNameTranslation {}

export interface Sport {
	name: string
	slug: string
	id: number
}

export interface TeamColors {
	primary: string
	secondary: string
	text: string
}

export interface Changes {
	changes?: string[]
	changeTimestamp: number
}

export interface RoundInfo {
	round: number
	name?: string
	cupRoundType?: number
}

export interface Season {
	name: string
	year: string
	editor: boolean
	seasonCoverageInfo?: SeasonCoverageInfo
	id: number
}

export interface SeasonCoverageInfo {
	editorCoverageLevel?: number
}

export interface Status {
	code: number
	description: string
	type: string
}

export interface StatusTime {
	prefix: string
	initial: number
	max: number
	timestamp: number
	extra: number
}

export interface Time {
	injuryTime1?: number
	injuryTime2?: number
	currentPeriodStartTimestamp?: number
	initial?: number
	max?: number
	extra?: number
	injuryTime3?: number
	injuryTime4?: number
}

export interface Tournament {
	name: string
	slug: string
	category: Category
	uniqueTournament: UniqueTournament
	priority: number
	id: number
}

export interface Category {
	name: string
	slug: string
	sport: Sport
	id: number
	country: Country
	flag: string
	alpha2?: string
}

export interface UniqueTournament {
	name: string
	slug: string
	category: Category
	userCount: number
	crowdsourcingEnabled: boolean
	hasPerformanceGraphFeature: boolean
	id: number
	hasEventPlayerStatistics: boolean
	displayInverseHomeAwayTeams: boolean
	primaryColorHex?: string
	secondaryColorHex?: string
	country?: ShortNameTranslation
}

export interface Venue {
	city: City
	stadium: City
	id: number
	country: Country
}

export interface City {
	name: string
}

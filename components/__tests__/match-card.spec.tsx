import { render } from '@testing-library/react-native'

import { Match } from '@/types'
import { MatchCard } from '../match-card'
import { wrappWithTamagui } from '@/config/helpers'
const WrappedMatchCard = wrappWithTamagui(MatchCard)
describe('MatchCard', () => {
	it('should render match card', () => {
		const match: Match = {
			tournament: {
				name: 'UEFA Champions League',
				slug: 'uefa-champions-league',
				category: {
					name: 'Europe',
					slug: 'europe',
					sport: {
						name: 'Football',
						slug: 'football',
						id: 1,
					},
					id: 1465,
					country: {},
					flag: 'europe',
				},
				uniqueTournament: {
					name: 'UEFA Champions League',
					slug: 'uefa-champions-league',
					category: {
						name: 'Europe',
						slug: 'europe',
						sport: {
							name: 'Football',
							slug: 'football',
							id: 1,
						},
						id: 1465,
						country: {},
						flag: 'europe',
					},
					userCount: 1474353,
					crowdsourcingEnabled: false,
					hasPerformanceGraphFeature: false,
					id: 7,
					hasEventPlayerStatistics: true,
					displayInverseHomeAwayTeams: false,
				},
				priority: 612,
				id: 23,
			},
			season: {
				name: 'UEFA Champions League 23/24',
				year: '23/24',
				editor: false,
				seasonCoverageInfo: {},
				id: 52162,
			},
			roundInfo: {
				round: 5,
				name: 'Round of 16',
				cupRoundType: 8,
			},
			customId: 'Rsckb',
			status: {
				code: 100,
				description: 'Ended',
				type: 'finished',
			},
			winnerCode: 1,
			homeTeam: {
				name: 'FC Porto',
				slug: 'fc-porto',
				shortName: 'Porto',
				sport: {
					name: 'Football',
					slug: 'football',
					id: 1,
				},
				userCount: 366060,
				nameCode: 'FCP',
				disabled: false,
				national: false,
				type: 0,
				id: 3002,
				country: {
					alpha2: 'PT',
					name: 'Portugal',
				},
				subTeams: [],
				teamColors: {
					primary: '#52b030',
					secondary: '#52b030',
					text: '#ffffff',
				},
				fieldTranslations: {
					nameTranslation: {
						ar: 'اف سي بورتو',
					},
					shortNameTranslation: {},
				},
			},
			awayTeam: {
				name: 'Arsenal',
				slug: 'arsenal',
				shortName: 'Arsenal',
				sport: {
					name: 'Football',
					slug: 'football',
					id: 1,
				},
				userCount: 1165702,
				nameCode: 'ARS',
				disabled: false,
				national: false,
				type: 0,
				id: 42,
				country: {
					alpha2: 'EN',
					name: 'England',
				},
				subTeams: [],
				teamColors: {
					primary: '#52b030',
					secondary: '#52b030',
					text: '#ffffff',
				},
				fieldTranslations: {
					nameTranslation: {
						ar: 'أرسنال',
					},
					shortNameTranslation: {},
				},
			},
			homeScore: {
				current: 1,
				display: 1,
				period1: 0,
				period2: 1,
				normaltime: 1,
			},
			awayScore: {
				current: 0,
				display: 0,
				period1: 0,
				period2: 0,
				normaltime: 0,
			},
			coverage: -1,
			time: {
				injuryTime1: 1,
				injuryTime2: 4,
				currentPeriodStartTimestamp: 1708549462,
			},
			changes: {
				changes: [
					'status.code',
					'status.description',
					'status.type',
					'homeScore.period2',
					'homeScore.normaltime',
				],
				changeTimestamp: 1708552506,
			},
			hasGlobalHighlights: false,
			hasEventPlayerStatistics: true,
			hasEventPlayerHeatMap: true,
			detailId: 1,
			crowdsourcingDataDisplayEnabled: false,
			id: 11905256,
			crowdsourcingEnabled: false,
			startTimestamp: 1708545600,
			slug: 'fc-porto-arsenal',
			finalResultOnly: false,
			isEditor: false,
		}
		const { getByText } = render(<WrappedMatchCard match={match} />)
		expect(getByText(match.tournament.name)).toBeTruthy()
		expect(getByText(match.awayTeam.name)).toBeTruthy()
		expect(getByText(match.homeTeam.name)).toBeTruthy()
	})
})

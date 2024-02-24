import { render } from '@testing-library/react-native'
import '@testing-library/react-native/extend-expect'

import { Player } from '@/types/players'
import { PlayerCard } from '../player-card'
import { wrappWithTamagui } from '../../config/helpers'
const WrappedPlayerCard = wrappWithTamagui(PlayerCard)
describe('PlayerCard', () => {
	it('should render player card', () => {
		const player: Player = {
			id: '76153',
			player_id: '506100',
			player_name: 'Jude Bellingham',
			player_slug: 'jude-bellingham',
			player_picture: 'https://static.footballtransfers.com/resources/players/506100.png',
			age: '20',
			position_key: '2944839123_1060745282_498629140',
			position_short_name: 'M (C), DM (RL)',
			team_name: 'Real Madrid',
			team_short_name: 'Real Madrid',
			team_slug: 'es/real-madrid',
			team_picture: 'https://static.footballtransfers.com/resources/teams/48.png',
			estimated_value: '\u20ac140.1M',
			country_id: '202',
			country_code: 'uk',
			country_name: 'England',
			sci_skill_smg: '81.0',
			sci_potential_smg: '98.4',
			sci_skill_color: '#274e13',
			sci_potential_color: '#2a0a43',
		}
		const { getByText, getByTestId } = render(<WrappedPlayerCard player={player} />)
		expect(getByText(player.player_name)).toBeTruthy()
		const playerImage = getByTestId(`player-image${player.id}`)
        expect(playerImage).toHaveProp('source', { uri: player.player_picture })
	})
})

import { StyleSheet } from 'react-native'
import { View } from 'tamagui'
import { LinearGradient } from '@tamagui/linear-gradient'
import React, { useMemo } from 'react'
import { MatchCard } from '@/components/match-card'
import { useAppDispatch, useAppSelector } from '@/store'
import { fetchMatches } from '@/features/matches/slice'
import { FlashList } from '@shopify/flash-list'

const MatchesPage = () => {
	const dispatch = useAppDispatch()
	const { matches } = useAppSelector((state) => state.matches)
	const { selectedTournament } = useAppSelector((state) => state.tournaments)

	const matchesArray = useMemo(
		() =>
			matches.filter(
				({ tournament }) => !selectedTournament?.id || tournament.uniqueTournament.id === selectedTournament?.id
			),
		[matches, selectedTournament]
	)
	React.useEffect(() => {
		console.log('fetching matches')
		dispatch(fetchMatches())
	}, [])
	return (
		<LinearGradient style={styles.container} colors={['skyblue', '$blue7Dark']}>
			<FlashList
				contentContainerStyle={{ paddingHorizontal: 20 }}
				ItemSeparatorComponent={() => <View h="$2" />}
				renderItem={({ item }) => <MatchCard match={item} />}
				estimatedItemSize={150}
				data={matchesArray}
			/>
		</LinearGradient>
	)
}

export default MatchesPage

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 90,
	},
})

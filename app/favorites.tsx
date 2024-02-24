import React, { useMemo } from 'react'
import { useAppSelector } from '@/store'
import { MatchCard } from '@/components/match-card'
import { View } from 'tamagui'
import { FlashList } from '@shopify/flash-list'
import { LinearGradient } from '@tamagui/linear-gradient'
import { Stack } from 'expo-router'

const Favorites = () => {
	const { favoriteMacthes } = useAppSelector((state) => state.favorites)
	const { matches } = useAppSelector((state) => state.matches)
	const favoriteMatches = useMemo(
		() => matches.filter(({ id }) => favoriteMacthes.includes('' + id)),
		[favoriteMacthes, matches]
	)
	return (
		<>
			<Stack.Screen
				options={{
					title: 'Favorites',
					headerTitleAlign: 'center',
					headerTintColor: 'white',
					headerTransparent: true,
				}}
			/>
			<LinearGradient colors={['$blue10Light', '$pink10Light']} flex={1} pt={90}>
				<FlashList
					contentContainerStyle={{ paddingHorizontal: 20 }}
					ItemSeparatorComponent={() => <View h="$2" />}
					renderItem={({ item }) => <MatchCard match={item} />}
					estimatedItemSize={20}
					data={favoriteMatches}
				/>
			</LinearGradient>
		</>
	)
}

export default Favorites

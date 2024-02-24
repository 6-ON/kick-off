import React, { useEffect, useMemo, useState } from 'react'
import { View, Input } from 'tamagui'
import { LinearGradient } from '@tamagui/linear-gradient'
import { FlashList } from '@shopify/flash-list'
import { useAppDispatch, useAppSelector } from '@/store'
import { fetchPlayers } from '@/features/players/playersSlice'
import { PlayerCard } from '@/components/player-card'

const Players = () => {
	const [search, setSearch] = useState('')
	const { players: storePlayers } = useAppSelector((state) => state.players)
	const players = useMemo(
		() => storePlayers.filter((player) => player.player_name.toLowerCase().includes(search.toLowerCase())),
		[storePlayers, search]
	)
	const dispatch = useAppDispatch()
	useEffect(() => {
		console.log('fetching players');
		
		dispatch(fetchPlayers())
	}, [])
	return (
		<LinearGradient colors={['$blue10Light', '$accentBackground']} f={1} pt={80} pb={60}>
			<Input placeholder="Search" m="$7" mt="$5" value={search} onChangeText={setSearch} />
			<FlashList
				data={players}
				contentContainerStyle={{
					paddingHorizontal: 10,
				}}
				numColumns={3}
				estimatedItemSize={100}
				ItemSeparatorComponent={() => <View h={'$1'} />}
				renderItem={({ item }) => (
					<View w={'100%'} px="$1.5">
						<PlayerCard player={item} />
					</View>
				)}
			/>
		</LinearGradient>
	)
}

export default Players

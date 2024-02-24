import React from 'react'
import { Card, Avatar, Text } from 'tamagui'
import { useRouter } from 'expo-router'
import { Player } from '@/types/players'

export const PlayerCard: React.FC<{ player: Player }> = function ({ player }) {
	const router = useRouter()
	return (
		<Card ai="center" jc="center" elevate ov="hidden" h="$13" onPress={() => router.push(`/player/${player.id}`)}>
			<Avatar size="$7">
				<Avatar.Image accessibilityLabel="Cam" src={player.player_picture} testID={`player-image${player.id}`} />
			</Avatar>
			<Text mt="$3" fow="bold" fos="$5" ta="center" w={'$10'}>
				{player.player_name}
			</Text>
		</Card>
	)
}

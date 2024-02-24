import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import { LinearGradient } from '@tamagui/linear-gradient'
import { useAppSelector } from '@/store'
import { Avatar, Circle, H2, H3, Text, View, XStack, YStack } from 'tamagui'

const PlayerDetails = () => {
	const { id } = useLocalSearchParams()
	const player = useAppSelector((state) => state.players.players.find((player) => player.id === id))
	if (!player) return <Text>Loading...</Text>
	console.log(player.player_picture);
	
	return (
		<LinearGradient colors={['$blue9Light', '$green10Dark']} f={1} pt={80}>
			<Stack.Screen
				options={{
					headerTransparent: true,
					headerTintColor: 'white',
					title: '',
				}}
			/>
			<Avatar size="$20" m="$5" als="center">
				<Avatar.Image src={player.player_picture} />
			</Avatar>
			<H2 ta="center" color="white">
				{player.player_name}
			</H2>
			<XStack px="$7" mt="$6" w="100%">
				<YStack ai="center" f={1} gap="$5">
					<View ai="center">
						<H3 color="$white1">Team</H3>
						<Text color="$white1" fos="$5">
							{player.team_name}
						</Text>
					</View>
					<View ai="center">
						<H3 color="$white1">Age</H3>
						<Text color="$white1" fos="$5">
							{player.age}
						</Text>
					</View>
					<View ai="center">
						<H3 color="$white1">Skills</H3>
						<Circle mt="$4" size="$10" bg={player.sci_skill_color} als="center" animation={'lazy'}>
							<Text fow="bold" fos="$7" color="$white1">
								{player.sci_skill_smg}
							</Text>
						</Circle>
					</View>
				</YStack>
				<YStack ai="center" f={1} gap="$5">
					<View ai="center">
						<H3 color="$white1">Position</H3>
						<Text color="$white1" fos="$5">
							{player.position_short_name}
						</Text>
					</View>
					<View ai="center">
						<H3 color="$white1">Country</H3>
						<Text color="$white1" fos="$5">
							{player.country_name}
						</Text>
					</View>
					<View ai="center">
						<H3 color="$white1">Potential</H3>
						<Circle mt="$4" size="$10" bg={player.sci_potential_color} als="center" animation={'lazy'}>
							<Text fow="bold" fos="$7" color="$white1">
								{player.sci_potential_smg}
							</Text>
						</Circle>
					</View>
				</YStack>
			</XStack>
		</LinearGradient>
	)
}

export default PlayerDetails

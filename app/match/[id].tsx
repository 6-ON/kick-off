import React, { useEffect } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import { Avatar, H2, Image, ScrollView, Text, View, XStack, YStack } from 'tamagui'
import { LinearGradient } from '@tamagui/linear-gradient'
import { BlurView } from 'expo-blur'
import { format, formatRelative } from 'date-fns'
import { MaterialIcons } from '@expo/vector-icons'
import { useAppDispatch, useAppSelector } from '@/store'
import { fetchIncidents, fetchMatch, unselectMatch } from '@/features/matches/slice'
import { toggleFavourite } from '@/features/favorites/favoritesSlice'
import { TimelineCard } from '../../components/timeline-card'
const MatchDetails = () => {
	const { selectedMatch } = useAppSelector((state) => state.matches)
	const { favoriteMacthes } = useAppSelector((state) => state.favorites)
	const dispatch = useAppDispatch()
	const { id } = useLocalSearchParams()
	const { match, incidents } = selectedMatch
	const isFavorite = favoriteMacthes.includes(id as string)
	useEffect(() => {
		console.log(id)

		dispatch(fetchMatch(+id!)).then(() => dispatch(fetchIncidents(+id!)))
		return () => {
			dispatch(unselectMatch())
		}
	}, [id, dispatch])

	if (!match) return <View />
	const { homeTeam, awayTeam } = match
	return (
		<>
			<Stack.Screen
				options={{
					title: match.tournament.uniqueTournament.name,
					headerRight: () => (
						<MaterialIcons
							onPress={() => dispatch(toggleFavourite(id as string))}
							name={isFavorite ? 'favorite' : 'favorite-outline'}
							size={24}
							color="white"
						/>
					),
				}}
			/>
			<LinearGradient colors={[homeTeam.teamColors.primary, awayTeam.teamColors.secondary]} f={1}>
				<ScrollView f={1}>
					<LinearGradient
						elevation={'$1'}
						bbrr={'$10'}
						bblr={'$10'}
						colors={[awayTeam.teamColors.secondary, homeTeam.teamColors.primary]}
						start={[1, 0.3]}
						end={[0, 0]}
					>
						<BlurView intensity={70} tint="dark" style={{ paddingTop: 80 }}>
							<YStack p="$5" gap="$5" w="100%">
								<XStack p="$string5" py={'$8'} w="100%" jc="space-between" ai="center">
									<YStack ai="center" gap="$3">
										<Text fontWeight="bold" color="white" w="$7" ta="center">
											{homeTeam.name}
										</Text>
										<Avatar size="$6">
											<Avatar.Image
												accessibilityLabel="Cam"
												src={`https://api.sofascore.app/api/v1/team/${homeTeam.id}/image`}
											/>
										</Avatar>
									</YStack>
									{match.startTimestamp * 1000 > Date.now() ? (
										<YStack ai="center" gap="$2.5">
											<Text fos="$6" fontWeight="100" color="white" fow="bold" tt="capitalize">
												{formatRelative(match.startTimestamp * 1000, new Date()).split(' ')[0]}
											</Text>
											<Text fontWeight="100" color="white" fow="bold">
												{format(match.startTimestamp * 1000, 'HH:mm a')}
											</Text>
										</YStack>
									) : (
										<XStack ai="center" gap="$2.5">
											<H2 fontWeight="100" color="white">
												{match.homeScore.normaltime}
											</H2>
											<View h="$0.5" w="$0.75" bg="white" />
											<H2 fontWeight="100" color="white">
												{match.awayScore.normaltime}
											</H2>
										</XStack>
									)}
									<YStack ai="center" gap="$3">
										<Text fontWeight="bold" color="white" w="$7" ta="center">
											{awayTeam.name}
										</Text>
										<Avatar size="$6">
											<Avatar.Image
												accessibilityLabel="Cam"
												src={`https://api.sofascore.app/api/v1/team/${awayTeam.id}/image`}
											/>
										</Avatar>
									</YStack>
								</XStack>
								<XStack ai="center" w="100%" jc="space-between">
									<XStack gap="$2" ai="center">
										<MaterialIcons name="stadium" size={24} color="white" />
										<Text color="white" w="$10">
											{homeTeam.venue?.stadium.name || 'Unknown'}
										</Text>
									</XStack>
									<XStack gap="$2" ai="center">
										<Text color="white">{format(match.startTimestamp * 1000, 'dd/MM/yyyy')}</Text>
										<MaterialIcons name="calendar-month" size={24} color="white" />
									</XStack>
								</XStack>
								<XStack ai="center" w="100%" jc="space-between">
									<XStack gap="$2" ai="center">
										<MaterialIcons name="location-city" size={24} color="white" />
										<Text color="white" w="$10">
											{homeTeam.venue?.city.name || 'Unknown'}
										</Text>
									</XStack>
									<XStack gap="$2" ai="center">
										<Text color="white">{format(match.startTimestamp * 1000, 'HH:mm a')}</Text>
										<MaterialIcons name="timer" size={24} color="white" />
									</XStack>
								</XStack>
							</YStack>
						</BlurView>
					</LinearGradient>
					{incidents && (
						<View p="$5">
							<TimelineCard incidents={incidents} />
						</View>
					)}
				</ScrollView>
			</LinearGradient>
		</>
	)
}

export default MatchDetails

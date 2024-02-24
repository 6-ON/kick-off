import { Avatar, Card, H2, Paragraph, Text, View, XStack, YStack } from 'tamagui'
import React from 'react'
import { Match } from '@/types'
import { format } from 'date-fns'
import { useRouter } from 'expo-router'
export const MatchCard: React.FC<{ match: Match }> = ({ match }) => {
	const { id, awayTeam, homeTeam, tournament } = match
	const router = useRouter()
	return (
		<Card elevate size="$4" bordered w="100%" ai="center" onPress={() => router.push(`/match/${id}`)}>
			<YStack p="$1.5" gap="$3">
				<XStack ai="center" gap="$3" maxWidth="$20">
					<Avatar size="$4">
						<Avatar.Image
							accessibilityLabel="Cam"
							src={`https://api.sofascore.app/api/v1/unique-tournament/${tournament.uniqueTournament.id}/image`}
						/>
					</Avatar>
					<Paragraph fos="$1" fow="bold">
						{match.tournament.name}
					</Paragraph>
				</XStack>
				<XStack ai="center" p="$5" py="$1.5" jc="space-between" w="100%">
					<YStack ai="center" py="$1.5" gap="$3">
						<Avatar size="$4">
							<Avatar.Image
								accessibilityLabel="Cam"
								src={`https://api.sofascore.app/api/v1/team/${awayTeam.id}/image`}
							/>
						</Avatar>
						<Paragraph w="$10" textAlign="center">
							{match.awayTeam.name}
						</Paragraph>
					</YStack>
					<YStack ai="center" justifyContent="space-between">
						<XStack ai="center" gap="$3">
							<H2 fontWeight="100">{match.awayScore.normaltime}</H2>
							<Text fontWeight="bold">VS</Text>
							<H2 fontWeight="100">{match.homeScore.normaltime}</H2>
						</XStack>
						<View bg="$blue10" py="$1" px="$2" br="$9">
							<Text color="$white1" fontWeight="100">
								{format(match.startTimestamp * 1000, 'hh:mm a')}
							</Text>
						</View>
						<Text color="$gray11" fontWeight="100">
							{format(match.startTimestamp * 1000, 'dd/MM/yyyy')}
						</Text>
						<Text fontWeight="100"></Text>
					</YStack>
					<XStack ai="center" py="$1.5" gap="$3">
						<YStack ai="center" py="$1.5" gap="$3">
							<Avatar size="$4">
								<Avatar.Image
									accessibilityLabel="Cam"
									src={`https://api.sofascore.app/api/v1/team/${homeTeam.id}/image`}
								/>
								<Avatar.Fallback backgroundColor="$blue10" />
							</Avatar>
							<Paragraph w="$10" textAlign="center">
								{homeTeam.name}
							</Paragraph>
						</YStack>
					</XStack>
				</XStack>
			</YStack>
		</Card>
	)
}

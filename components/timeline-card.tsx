import React from 'react'
import { Card, H2, Text, XStack, YStack } from 'tamagui'
import { MaterialIcons } from '@expo/vector-icons'
import { Incident } from '@/types/incidents'
type Props = {
	incidents: Incident[]
}
export function TimelineCard({ incidents }: Props) {
	return (
		<Card elevate mb="$5">
			<YStack p="$5" gap="$5">
				<H2 fontWeight="bold" ta="center">
					Timeline
				</H2>
				{incidents
					.filter((incident) => incident.incidentType === 'goal')
					.map((incident) => (
						<XStack
							key={incident.id}
							gap="$2"
							ai="center"
							fd={!incident.isHome ? 'row-reverse' : 'row'}
							alignSelf={!incident.isHome ? 'flex-end' : 'flex-start'}
						>
							<MaterialIcons name="sports-soccer" size={24} color="green" />
							<Text fos="$4" fow="bold">
								'{incident.time}
							</Text>
							<Text fos="$4" fow="bold">
								{incident.text}
							</Text>
							<Text fos="$4" fow="bold">
								{incident.player?.name}
							</Text>
						</XStack>
					))}
			</YStack>
		</Card>
	)
}

import { useEffect, useMemo, useState } from 'react'
import { Adapt, Select, SelectProps, Sheet, YStack } from 'tamagui'
import { MaterialIcons } from '@expo/vector-icons'
import { useAppDispatch, useAppSelector } from '@/store'
import { fetchTournaments, selectTournament } from '../tournaments/tourSlice'

export function SelectTourFilter(props: SelectProps) {
	const { tournaments, selectedTournament } = useAppSelector((state) => state.tournaments)
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(fetchTournaments())
	}, [dispatch])

	return (
		<Select
			value={'' + selectedTournament?.id}
			onValueChange={(v) => dispatch(selectTournament(v))}
			disablePreventBodyScroll
			{...props}
		>
			<Select.Trigger w={32} bw={0} p={0} ml="$4" bg={'$colorTransparent'}>
				<MaterialIcons name="filter-alt" size={32} color="white" />
			</Select.Trigger>

			<Adapt when="sm" platform="touch">
				<Sheet
					native={!!props.native}
					modal
					dismissOnSnapToBottom
					animationConfig={{
						type: 'spring',
						damping: 200,
						mass: 0.5,
						stiffness: 350,
					}}
				>
					<Sheet.Frame>
						<Sheet.ScrollView>
							<Adapt.Contents />
						</Sheet.ScrollView>
					</Sheet.Frame>
					<Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
				</Sheet>
			</Adapt>

			<Select.Content zIndex={200000}>
				<Select.Viewport minWidth={200}>
					<Select.Group>
						<Select.Label textAlign="center">Tournaments</Select.Label>
						<Select.Item index={0} value="">
							<Select.ItemText>All</Select.ItemText>
							<Select.ItemIndicator marginLeft="auto">
								<MaterialIcons name="check" size={24} color="black" />
							</Select.ItemIndicator>
						</Select.Item>
						{/* for longer lists memoizing these is useful */}
						{useMemo(
							() =>
								tournaments.map((item, i) => {
									return (
										<Select.Item index={i + 1} key={item.slug} value={'' + item.id}>
											<Select.ItemText>{item.name}</Select.ItemText>
											<Select.ItemIndicator marginLeft="auto">
												<MaterialIcons name="check" size={24} color="black" />
											</Select.ItemIndicator>
										</Select.Item>
									)
								}),
							[tournaments]
						)}
					</Select.Group>
				</Select.Viewport>
			</Select.Content>
		</Select>
	)
}

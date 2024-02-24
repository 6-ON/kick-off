import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Tabs } from 'expo-router'
import { MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons'
import { SelectTourFilter } from '@/features/matches/tour-filter'
const TabsLayout = () => {
	return (
		<Tabs
			screenOptions={{
				headerBackground: () => <View style={{ position: 'absolute' }}></View>,
				headerTransparent: true,
				headerBackgroundContainerStyle: {
					backgroundColor: '$accentBackrgound',
					borderBottomEndRadius: 25,
					borderBottomStartRadius: 25,
				},
				headerTitleStyle: {
					fontFamily: 'Inter',
					fontWeight: '700',
					fontSize: 24,
					color: 'white',
				},
				tabBarItemStyle: {
					borderBottomWidth: 2,
					paddingVertical: 10,
				},
				tabBarStyle: {
					position: 'absolute',
					overflow: 'hidden',
					borderTopEndRadius: 25,
					borderTopStartRadius: 25,
					display: 'flex',
					height: 60,
				},
				tabBarLabelStyle: {
					fontFamily: 'Inter',
					fontWeight: '700',
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Matches',
					headerTitleAlign: 'center',
					tabBarIcon: ({ focused, ...props }) => (
						<MaterialCommunityIcons name="clock" {...props}></MaterialCommunityIcons>
					),
					headerLeft: () => <SelectTourFilter />,
					headerRight: () => (
						<Link href="/favorites" style={{ marginRight: 20 }}>
							<MaterialIcons name="favorite" size={24} color="white"  />
						</Link>
					),
				}}
			/>
			<Tabs.Screen
				name="players"
				options={{
					title: 'Players',
					headerTitleAlign: 'center',
					tabBarIcon: ({ focused, ...props }) => (
						<MaterialCommunityIcons name="run" {...props}></MaterialCommunityIcons>
					),
				}}
			/>
		</Tabs>
	)
}

export default TabsLayout

const styles = StyleSheet.create({})

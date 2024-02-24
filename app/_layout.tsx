import { StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { TamaguiProvider } from 'tamagui'
import { Stack } from 'expo-router'
import tamaguiConfig from '../config/tamagui'
import { SplashScreen } from 'expo-router'
import { useFonts } from 'expo-font'
import '@tamagui/font-inter'
import { Provider } from 'react-redux'
import { store } from '@/store'
SplashScreen.preventAutoHideAsync()
const RootLayout = () => {
	const [fontLoaded, fontError] = useFonts({
		Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
		InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
	})

	useEffect(() => {
		if (fontLoaded || fontError) SplashScreen.hideAsync()
	}, [fontLoaded, fontError])

	if (!fontLoaded) return null
	return (
		<Provider store={store}>
			<TamaguiProvider config={tamaguiConfig}>
				<Stack
					initialRouteName="(tabs)"
					screenOptions={{
						animation: 'slide_from_right',
					}}
				>
					<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
					<Stack.Screen
						name="match/[id]"
						options={{
							// animationTypeForReplace: 'pop',
							headerTransparent: true,
							headerTintColor: 'white',
						}}
					/>
				</Stack>
			</TamaguiProvider>
		</Provider>
	)
}

export default RootLayout

const styles = StyleSheet.create({})

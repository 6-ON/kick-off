import tamaguiConfig from '@/config/tamagui'
import { TamaguiProvider } from '@tamagui/core'

export const wrappWithTamagui = <T extends React.ComponentType<any>>(Component: T) => {

	const WrappedWithTamagui: React.FC<React.ComponentProps<T>> = (props) => {
		return (
			<TamaguiProvider config={tamaguiConfig}>
				<Component {...props} />
			</TamaguiProvider>
		)
	}

	return WrappedWithTamagui
}

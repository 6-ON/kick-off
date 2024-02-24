import favoritesReducer from '@/features/favorites/favoritesSlice'
import matchesReducer from '@/features/matches/slice'
import playersReducer from '@/features/players/playersSlice'
import tournamentReducer from '@/features/tournaments/tourSlice'
import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
	reducer: {
		matches: matchesReducer,
		tournaments: tournamentReducer,
		favorites: favoritesReducer,
		players :playersReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FavouritesState {
	favoriteMacthes: string[]
}

const initialState: FavouritesState = {
	favoriteMacthes: [],
}

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFavourite: (state, action: PayloadAction<string>) => {
			const index = state.favoriteMacthes.indexOf(action.payload)
			if (index !== -1) {
				state.favoriteMacthes.splice(index, 1)
			} else {
				state.favoriteMacthes.push(action.payload)
			}
		},
	},
})

export const { toggleFavourite } = favoritesSlice.actions

const favoritesReducer = favoritesSlice.reducer

export default favoritesReducer

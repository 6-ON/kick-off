import { Player, PlayersResponse } from '@/types/players'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPlayers = createAsyncThunk('players/fetchPlayers', async () => {
    const formData = new FormData()
    formData.append('page', '1')
    formData.append('pageItems', '100')
	const response = await fetch("https://www.footballtransfers.com/en/players/actions/overview/overview",{
        method: 'POST',
        body:formData
    })
	const data: PlayersResponse = await response.json()
	return data.records
})

interface PlayersState {
	players: Player[]
	loading: boolean
}

const playersSlice = createSlice({
	name: 'players',
	initialState: {
		players: [],
		loading: false,
	} as PlayersState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPlayers.pending, (state) => {
				state.loading = true
			})
			.addCase(fetchPlayers.fulfilled, (state, action) => {
				state.loading = false
				state.players = action.payload
			})
	},
})

const playersReducer = playersSlice.reducer

export default playersReducer

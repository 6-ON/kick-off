import { TournamentsResponse, UniqueTournament } from '@/types'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

interface TournamentState {
	tournaments: UniqueTournament[]
	selectedTournament: UniqueTournament | undefined
	loading: boolean
}
const initialState: TournamentState = {
	tournaments: [],
	selectedTournament: undefined,
	loading: false,
}

export const fetchTournaments = createAsyncThunk('tournament/fetchTournaments', async () => {
	const response = await fetch('https://api.sofascore.com/api/v1/config/top-unique-tournaments/MA/football')
	const data: TournamentsResponse = await response.json()
	return data
})

const tournamentSlice = createSlice({
	name: 'tournament',
	initialState,
	reducers: {
		selectTournament(state, action: PayloadAction<string | undefined>) {
			if (!action.payload) state.selectedTournament = undefined
			else state.selectedTournament = state.tournaments.find((t) => t.id === +action.payload!)
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTournaments.pending, (state) => {
				state.loading = true
			})
			.addCase(fetchTournaments.fulfilled, (state, action) => {
				state.loading = false
				state.tournaments = action.payload.uniqueTournaments
			})
			.addCase(fetchTournaments.rejected, (state) => {
				state.loading = false
			})
	},
})

export const { selectTournament } = tournamentSlice.actions

const tournamentReducer = tournamentSlice.reducer

export default tournamentReducer

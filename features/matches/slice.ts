import { Match, SofascoreMatchResponse, SofascoreResponse } from '@/types'
import { Incident, ResponseIncidents } from '@/types/incidents'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { format } from 'date-fns'

interface MatchesState {
	matches: Match[]
	loading: boolean
	selectedMatch: {
		loading: boolean
		match?: Match | undefined
		incidents?: Incident[] | undefined
	}
}

const initialState: MatchesState = {
	matches: [],
	loading: false,
	selectedMatch: {
		loading: false,
	},
}
export const fetchMatches = createAsyncThunk('matches/fetchMatches', async () => {
	const response = await fetch(`https://api.sofascore.com/api/v1/sport/football/scheduled-events/${format(Date.now(), 'yyyy-MM-dd')}`)
	const data: SofascoreResponse = await response.json()
	return data.events
})
export const fetchMatch = createAsyncThunk('matches/fetchMatch', async (id: number) => {
	const response = await fetch(`https://api.sofascore.com/api/v1/event/${id}`)
	const data: SofascoreMatchResponse = await response.json()
	return data.event
})
export const fetchIncidents = createAsyncThunk('matches/fetchIncidents', async (id: number) => {
	const response = await fetch(`https://api.sofascore.com/api/v1/event/${id}/incidents`)
	const data: ResponseIncidents = await response.json()
	return data
})
const matchesSlice = createSlice({
	name: 'matches',
	initialState,
	reducers: {
		setMatches(state, action: PayloadAction<Match[]>) {
			state.matches = action.payload
		},
		unselectMatch(state) {
			state.selectedMatch.match = undefined
			state.selectedMatch.incidents = undefined
		},
	},
	extraReducers: (builder) => {
		//-------------------------  Matches -------------------------
		builder.addCase(fetchMatches.pending, (state) => {
			state.loading = true
		})
		builder.addCase(fetchMatches.fulfilled, (state, action) => {
			state.loading = false
			state.matches = action.payload
		})
		builder.addCase(fetchMatches.rejected, (state) => {
			state.loading = false
		})
		// ---------------------------   Single Match   -----------------------
		builder.addCase(fetchMatch.pending, (state) => {
			state.selectedMatch.loading = true
		})
		builder.addCase(fetchMatch.fulfilled, (state, { payload }) => {
			state.selectedMatch.loading = false
			state.selectedMatch.match = payload
		})
		// ---------------------------   Incidents   -----------------------
		.addCase(fetchIncidents.pending, (state) => {
			state.selectedMatch.incidents = undefined
		})
		builder.addCase(fetchIncidents.fulfilled, (state, { payload }) => {
			state.selectedMatch.incidents = payload.incidents
		})
	},
})

export const { setMatches,unselectMatch } = matchesSlice.actions

const matchesReducer = matchesSlice.reducer
export default matchesReducer

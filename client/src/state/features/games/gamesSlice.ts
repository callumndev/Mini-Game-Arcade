import { createSlice } from '@reduxjs/toolkit'

import type { IGamesState } from './types/IGamesState'

import mockHubGames from './data/mockHubGames'


// Define the initial state
const initialState: IGamesState = {
    hubGames: mockHubGames,
}


export const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {},
})

export default gamesSlice.reducer;

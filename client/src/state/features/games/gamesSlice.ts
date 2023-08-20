import { createSlice } from '@reduxjs/toolkit'

import type { IGamesState } from './types/IGamesState'


// Define the initial state
const initialState: IGamesState = {
    hubGames: [],
}


export const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {},
})

export default gamesSlice.reducer;

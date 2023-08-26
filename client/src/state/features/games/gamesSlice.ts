import { createSlice } from '@reduxjs/toolkit'

import gamesAdapter from './gamesAdapter'

import mockHubGames from './data/mockHubGames'

import type { IGame } from './types/IGame'


const gamesSlice = createSlice({
    name: 'games',
    initialState: gamesAdapter.addMany(gamesAdapter.getInitialState(), mockHubGames),
    reducers: {
        gamesReceived(state, action: { type: string; payload: IGame[]; }) {
            gamesAdapter.setAll(state, action.payload);
        },
    },
})

export default gamesSlice;

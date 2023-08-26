import { createSelector } from '@reduxjs/toolkit'

import type { RootState } from '@state/store'

import { sortBy } from 'lodash'

import gamesAdapter from './gamesAdapter'


// Create a set of memoized selectors
const gamesSelectors = gamesAdapter.getSelectors<RootState>(
    (state) => state.games
)



// Select all game entities
export const selectAllGames = (state: RootState) => gamesSelectors.selectAll(state)


// Amount of games to return for a summary
export const SUMMARY_AMOUNT: number = 3

// Select a summary of hub games based on SUMMARY_AMOUNT
export const selectSummaryGames = createSelector(
    selectAllGames,
    // Sort alphabetically by displayName then return the first X (SUMMARY_AMOUNT) elements
    allGames => sortBy(allGames, 'displayName').slice(0, SUMMARY_AMOUNT),
)

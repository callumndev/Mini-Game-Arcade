import { createSelector } from '@reduxjs/toolkit'

import type { RootState } from '@state/store'

import { sortBy } from 'lodash'


/**
 * Hub games
 */
// Select all hub games
export const selectAllHubGames = (state: RootState) => state.games.hubGames;

// Amount of elements to return for a summary snapshot
export const SUMMARY_AMOUNT: number = 5;

// Select a summary of hub games for header and footer
export const selectSummaryHubGames = createSelector(
    selectAllHubGames,
    // Sort alphabetically by displayName then return the first X (SUMMARY_AMOUNT) elements
    allGames => sortBy(allGames, 'displayName').slice(0, SUMMARY_AMOUNT),
)

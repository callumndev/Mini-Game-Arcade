import { createEntityAdapter } from '@reduxjs/toolkit'

import { IGame } from './types/IGame'


const gamesAdapter = createEntityAdapter<IGame>({
    selectId: game => game.id,
    // Keep the "all IDs" array sorted based on game display names
    sortComparer: (a, b) => a.displayName.localeCompare(b.displayName),
})

export default gamesAdapter;

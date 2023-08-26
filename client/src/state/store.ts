import { configureStore } from '@reduxjs/toolkit'

import gamesSlice from '@state/features/games/gamesSlice'


const store = configureStore({
    reducer: {
        games: gamesSlice.reducer,
    },
})

export default store;


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit'
import userTokenReducer from '@/app/_lib/userTokenSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            userToken: userTokenReducer,
        }
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
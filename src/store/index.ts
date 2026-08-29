import { configureStore } from '@reduxjs/toolkit'
import hotelReducer from './hotelSlice'

export const store = configureStore({
  reducer: {
    hotels: hotelReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
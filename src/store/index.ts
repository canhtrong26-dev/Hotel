import { configureStore } from '@reduxjs/toolkit'
import hotelReducer from './hotelSlice'
import favoriteReducer from './favoriteSlice'

export const store = configureStore({
  reducer: {
    hotels: hotelReducer,
    favorites: favoriteReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
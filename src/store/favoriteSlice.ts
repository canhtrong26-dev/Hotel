import { createSlice } from '@reduxjs/toolkit'
import type { Hotel } from '../types/hotel'

type FavoriteState = {
  favorites: Hotel[]
}

// Đọc từ localStorage khi khởi động
const loadFromStorage = (): Hotel[] => {
  try {
    const data = localStorage.getItem('favorites')
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

// Lưu vào localStorage
const saveToStorage = (favorites: Hotel[]) => {
  localStorage.setItem('favorites', JSON.stringify(favorites))
}

const initialState: FavoriteState = {
  favorites: loadFromStorage()  // ← đọc từ localStorage ngay khi app mở
}

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const exists = state.favorites.find(h => h.id === action.payload.id)
      if (!exists) {
        state.favorites.push(action.payload)
        saveToStorage(state.favorites)  // ← lưu vào localStorage
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(h => h.id !== action.payload)
      saveToStorage(state.favorites)  // ← lưu vào localStorage
    }
  }
})  

export const { addFavorite, removeFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { Hotel } from '../types/hotel'

type HotelState = {
  hotels: Hotel[]
  loading: boolean
  error: string | null
}

const initialState: HotelState = {
  hotels: [],
  loading: false,
  error: null
}

// hàm gọi API — tự động tạo
export const fetchHotels = createAsyncThunk(
  'hotels/fetchAll',
  async () => {
    const response = await fetch('https://6a9302ce25936d5660f089a1.mockapi.io/hotels')
    const data = await response.json()
    return data
  }
)

const hotelSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotels.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchHotels.fulfilled, (state, action) => {
        state.loading = false
        state.hotels = action.payload
      })
      .addCase(fetchHotels.rejected, (state) => {
        state.loading = false
        state.error = 'Không thể tải dữ liệu!'
      })
  }
})

export default hotelSlice.reducer
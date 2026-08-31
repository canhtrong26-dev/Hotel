import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { Hotel } from '../types/hotel'

type HotelState = {
  hotels: Hotel[]
  selectedHotel: Hotel | null  // ← thêm dòng này
  loading: boolean
  error: string | null
}

const initialState: HotelState = {
  hotels: [],
  selectedHotel: null,  // ← thêm dòng này
  loading: false,
  error: null
}

// hàm lấy TẤT CẢ khách sạn
export const fetchHotels = createAsyncThunk(
  'hotels/fetchAll',
  async () => {
    const response = await fetch('https://6a9302ce25936d5660f089a1.mockapi.io/hotels')
    const data = await response.json()
    return data
  }
)

// hàm lấy 1 khách sạn theo id
export const fetchHotelById = createAsyncThunk(
  'hotels/fetchById',
  async (id: string) => {
    const response = await fetch(`https://6a9302ce25936d5660f089a1.mockapi.io/hotels/${id}`)
    const data = await response.json()
    return data
  }
)

export const createHotel = createAsyncThunk(
  'hotels/create',
  async (hotelData: Omit<Hotel, 'id'>) => {
    const response = await fetch('https://6a9302ce25936d5660f089a1.mockapi.io/hotels', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(hotelData)
    })
    const data = await response.json()
    return data
  }
)

export const updateHotel = createAsyncThunk(
  'hotels/update',
  async ({ id, data }: { id: string, data: Omit<Hotel, 'id'> }) => {
    const response = await fetch(`https://6a9302ce25936d5660f089a1.mockapi.io/hotels/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    const result = await response.json()
    return result
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
      .addCase(fetchHotelById.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchHotelById.fulfilled, (state, action) => {
        state.loading = false
        state.selectedHotel = action.payload
      })
      .addCase(fetchHotelById.rejected, (state) => {
        state.loading = false
        state.error = 'Không tìm thấy khách sạn!'
      })
      .addCase(createHotel.fulfilled, (state, action) => {
        state.hotels.push(action.payload)
      })
  }
})

export default hotelSlice.reducer
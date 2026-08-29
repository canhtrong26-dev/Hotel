import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState, AppDispatch } from '../store'
import { fetchHotels } from '../store/hotelSlice'
import HotelGrid from '../components/organisms/HotelGrid'
import SearchBar from '../components/organisms/SearchBar'
import FilterPanel from '../components/organisms/FilterPanel'

function HotelListPage() {
  const dispatch = useDispatch<AppDispatch>()
  const { hotels, loading, error } = useSelector((state: RootState) => state.hotels)

  const [search, setSearch] = useState('')
  const [city, setCity] = useState('Tất cả')
  const [maxPrice, setMaxPrice] = useState(0)
  const [rating, setRating] = useState(0)

  useEffect(() => {
    dispatch(fetchHotels())
  }, [dispatch])

  // ← THÊM LOGIC FILTER VÀO ĐÂY
  const filteredHotels = hotels.filter(hotel => {

    if (search && !hotel.name.toLowerCase().includes(search.toLowerCase()))
      return false  // lọc theo tên

    if (city !== 'Tất cả' && hotel.city !== city)
      return false  // lọc theo thành phố

    if (maxPrice !== 0 && hotel.price > maxPrice)
      return false  // lọc theo giá

    if (rating !== 0 && hotel.rating < rating)
      return false  // lọc theo sao

    return true  // qua hết → giữ lại
  })

  if (loading) return <p className="text-center py-10">Đang tải...</p>
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-textcolor">Danh sách khách sạn</h1>
      <SearchBar value={search} onChange={setSearch} />
      <FilterPanel
        city={city}
        maxPrice={maxPrice}
        rating={rating}
        onCityChange={setCity}
        onMaxPriceChange={setMaxPrice}
        onRatingChange={setRating}
      />
      <HotelGrid hotels={filteredHotels} />
      {/*                ↑ đổi từ hotels sang filteredHotels */}
    </div>
  )
}

export default HotelListPage
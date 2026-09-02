import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState, AppDispatch } from '../store'
import Button from '../components/atoms/Button'
import Badge from '../components/atoms/Badge'
import PriceTag from '../components/atoms/PriceTag'
import HotelLocation from '../components/molecules/HotelLocation'
import HotelRating from '../components/molecules/HotelRating'
import { fetchHotelById, fetchHotels } from '../store/hotelSlice'

function HotelDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const { hotels, selectedHotel, loading, error } = useSelector((state: RootState) => state.hotels)

  useEffect(() => {
    if (id) {
      dispatch(fetchHotelById(id))
      if (hotels.length === 0) dispatch(fetchHotels())
    }
  }, [id, dispatch])

  if (loading) return <p className="text-center py-10">Đang tải...</p>
  if (error || !selectedHotel) return <p className="text-center py-10 text-red-500">Không tìm thấy khách sạn!</p>

  const relatedHotels = hotels.filter(h =>
    h.city === selectedHotel?.city && String(h.id) !== String(id)
  )

 return (
  <div className="max-w-3xl mx-auto px-4 sm:px-0">

    <button
      onClick={() => navigate(-1)}
      className="text-primary mb-4 sm:mb-6 hover:underline text-sm sm:text-base"
    >
      ← Quay lại
    </button>

    <img
      src={selectedHotel.image}
      alt={selectedHotel.name}
      className="w-full h-48 sm:h-72 object-cover rounded-xl mb-4 sm:mb-6"
    />

    <div className="flex items-start justify-between mb-4">
      <h1 className="text-xl sm:text-2xl font-bold text-textcolor">{selectedHotel.name}</h1>
      <Badge status={selectedHotel.status} />
    </div>

    <div className="flex flex-col gap-2 mb-6">
      <HotelLocation city={selectedHotel.city} />
      <HotelRating rating={selectedHotel.rating} />
      <p className="text-sm text-gray-500">📌 {selectedHotel.address}</p>
      <p className="text-sm text-gray-500">🛏️ Còn {selectedHotel.rooms} phòng trống</p>
    </div>

    {selectedHotel.description && (
      <p className="text-gray-600 mb-6">{selectedHotel.description}</p>
    )}

    <div className="flex items-center justify-between border-t pt-6">
      <PriceTag price={selectedHotel.price} />
      <Button variant="primary" onClick={() => alert('Tính năng đặt phòng sắp ra mắt!')}>
        Đặt phòng ngay
      </Button>
    </div>

    {relatedHotels.length > 0 && (
      <div className="mt-10">
        <h2 className="text-lg sm:text-xl font-bold text-textcolor mb-4">
          Khách sạn cùng thành phố
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {relatedHotels.map(hotel => (
            <div
              key={hotel.id}
              onClick={() => navigate(`/hotels/${hotel.id}`)}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm cursor-pointer hover:shadow-md"
            >
              <img src={hotel.image} alt={hotel.name} className="w-full h-32 object-cover" />
              <div className="p-3">
                <p className="font-semibold text-sm text-textcolor">{hotel.name}</p>
                <p className="text-xs text-gray-500">📍 {hotel.city}</p>
                <p className="text-primary font-bold text-sm mt-1">
                  {hotel.price.toLocaleString('vi-VN')}₫ / đêm
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}

  </div>
)
}

export default HotelDetailPage
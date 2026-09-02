import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import type { RootState, AppDispatch } from '../../store'
import { fetchHotels } from '../../store/hotelSlice'

function AdminDashboardPage() {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const { hotels } = useSelector((state: RootState) => state.hotels)
  const { favorites } = useSelector((state: RootState) => state.favorites)

  useEffect(() => {
    dispatch(fetchHotels())
  }, [dispatch])

  const availableHotels = hotels.filter(h => h.status === 'available').length
  const fullyBookedHotels = hotels.filter(h => h.status === 'fully-booked').length

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-textcolor">Dashboard</h1>

      {/* 4 card thống kê */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <p className="text-gray-500 text-sm mb-1">Tổng khách sạn</p>
          <p className="text-3xl font-bold text-textcolor">{hotels.length}</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <p className="text-gray-500 text-sm mb-1">Còn phòng</p>
          <p className="text-3xl font-bold text-green-500">{availableHotels}</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <p className="text-gray-500 text-sm mb-1">Hết phòng</p>
          <p className="text-3xl font-bold text-red-500">{fullyBookedHotels}</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <p className="text-gray-500 text-sm mb-1">Yêu thích</p>
          <p className="text-3xl font-bold text-primary">{favorites.length}</p>
        </div>
      </div>

      {/* Link nhanh */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-base font-semibold text-textcolor mb-3">Quản lý nhanh</h2>
          <div className="flex flex-col gap-2">
            <button onClick={() => navigate('/admin/hotels')}
              className="text-left text-sm text-primary hover:underline">
              → Xem danh sách khách sạn
            </button>
            <button onClick={() => navigate('/admin/hotels/new')}
              className="text-left text-sm text-primary hover:underline">
              → Thêm khách sạn mới
            </button>
          </div>
        </div>

        {/* Danh sách ks mới nhất */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-base font-semibold text-textcolor mb-3">
            Khách sạn mới nhất
          </h2>
          <div className="flex flex-col gap-2">
            {hotels.slice(-3).reverse().map(hotel => (
              <div key={hotel.id} className="flex items-center justify-between">
                <span className="text-sm text-textcolor">{hotel.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  hotel.status === 'available'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}>
                  {hotel.status === 'available' ? 'Còn' : 'Hết'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboardPage
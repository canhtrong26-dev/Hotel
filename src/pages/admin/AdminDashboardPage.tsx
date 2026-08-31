import { useSelector } from 'react-redux'
import type { RootState } from '../../store'

function AdminDashboardPage() {
  const { hotels } = useSelector((state: RootState) => state.hotels)
  const { favorites } = useSelector((state: RootState) => state.favorites)

  const availableHotels = hotels.filter(h => h.status === 'available').length
  const fullyBookedHotels = hotels.filter(h => h.status === 'fully-booked').length

  return (  
    <div>
      <h1 className="text-2xl font-bold text-textcolor mb-6">Dashboard</h1>

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
    </div>
  )
}

export default AdminDashboardPage
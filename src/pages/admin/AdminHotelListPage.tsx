import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import type { RootState, AppDispatch } from '../../store'
import { fetchHotels, deleteHotel } from '../../store/hotelSlice'

function AdminHotelListPage() {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const { hotels, loading } = useSelector((state: RootState) => state.hotels)

  useEffect(() => {
    dispatch(fetchHotels())
  }, [dispatch])

  const handleDelete = (id: string) => {
    if (window.confirm('Bạn có chắc muốn xóa khách sạn này?')) {
      dispatch(deleteHotel(id))
    }
  }

  if (loading) return <p className="text-center py-10">Đang tải...</p>

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-textcolor">Quản lý khách sạn</h1>
        <button
          onClick={() => navigate('/admin/hotels/new')}
          className="bg-primary text-white px-4 py-2 rounded hover:opacity-90"
        >
          + Thêm mới
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="text-left px-4 py-3 text-sm text-gray-500">Tên</th>
              <th className="text-left px-4 py-3 text-sm text-gray-500">Thành phố</th>
              <th className="text-left px-4 py-3 text-sm text-gray-500">Giá</th>
              <th className="text-left px-4 py-3 text-sm text-gray-500">Trạng thái</th>
              <th className="text-left px-4 py-3 text-sm text-gray-500">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {hotels.map(hotel => (
              <tr key={hotel.id} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-textcolor">{hotel.name}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{hotel.city}</td>
                <td className="px-4 py-3 text-sm text-primary font-medium">
                  {hotel.price.toLocaleString('vi-VN')}₫
                </td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    hotel.status === 'available'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {hotel.status === 'available' ? 'Còn phòng' : 'Hết phòng'}
                  </span>
                </td>
                <td className="px-4 py-3 flex gap-2">
                  <button
                    onClick={() => navigate(`/admin/hotels/${hotel.id}/edit`)}
                    className="text-sm text-primary hover:underline"
                  >
                    Sửa
                  </button>
                  <button
                    onClick={() => handleDelete(String(hotel.id))}
                    className="text-sm text-red-500 hover:underline"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminHotelListPage
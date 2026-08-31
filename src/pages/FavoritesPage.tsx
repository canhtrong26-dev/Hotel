import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import type { RootState } from '../store'
import { removeFavorite } from '../store/favoriteSlice'

function FavoritesPage() {
  const favorites = useSelector((state: RootState) => state.favorites.favorites)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  if (favorites.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-4xl mb-4">🤍</p>
        <p className="text-gray-500 text-lg">Chưa có khách sạn yêu thích nào!</p>
        <button
          onClick={() => navigate('/hotels')}
          className="mt-6 text-primary hover:underline"
        >
          Tìm khách sạn ngay →
        </button>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-textcolor mb-6">
        Khách sạn yêu thích ({favorites.length})
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map(hotel => (
          <div
            key={hotel.id}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-48 object-cover cursor-pointer"
              onClick={() => navigate(`/hotels/${hotel.id}`)}
            />
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-base font-semibold text-textcolor">{hotel.name}</h3>
                <button
                  onClick={() => dispatch(removeFavorite(hotel.id))}
                  className="text-xl hover:scale-110 transition-transform"
                >
                  ❤️
                </button>
              </div>
              <p className="text-sm text-gray-500 mb-1">📍 {hotel.city}</p>
              <p className="text-sm text-gray-500 mb-3">⭐ {hotel.rating} sao</p>
              <div className="flex items-center justify-between border-t pt-3">
                <span className="text-primary font-bold">
                  {hotel.price.toLocaleString('vi-VN')}₫ / đêm
                </span>
                <button
                  onClick={() => navigate(`/hotels/${hotel.id}`)}
                  className="bg-primary text-white px-3 py-1.5 rounded text-sm"
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FavoritesPage
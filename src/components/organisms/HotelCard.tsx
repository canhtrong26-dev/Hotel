import { useNavigate } from 'react-router-dom'
import type  { Hotel } from '../../types/hotel'
import Badge from '../atoms/Badge'
import Button from '../atoms/Button'
import PriceTag from '../atoms/PriceTag'
import HotelLocation from '../molecules/HotelLocation'
import HotelRating from '../molecules/HotelRating'

type HotelCardProps = {
  hotel: Hotel
}

function HotelCard({ hotel }: HotelCardProps) {
  const navigate = useNavigate()

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">

      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">

        <div className="flex items-start justify-between mb-2">
          <h3 className="text-base font-semibold text-textcolor">{hotel.name}</h3>
          <Badge status={hotel.status} />
        </div>

        <HotelLocation city={hotel.city} />
        <HotelRating rating={hotel.rating} />

        <div className="flex items-center justify-between mt-4">
          <PriceTag price={hotel.price} />
          <Button variant="primary" onClick={() => navigate(`/hotels/${hotel.id}`)}>
            Xem chi tiết
          </Button>
        </div>

      </div>
    </div>
  )
}

export default HotelCard
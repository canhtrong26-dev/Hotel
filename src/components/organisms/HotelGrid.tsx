import type { Hotel } from '../../types/hotel'
import HotelCard from './HotelCard'

type HotelGridProps = {
  hotels: Hotel[]
}

function HotelGrid({ hotels }: HotelGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {hotels.map(hotel => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  )
}

export default HotelGrid
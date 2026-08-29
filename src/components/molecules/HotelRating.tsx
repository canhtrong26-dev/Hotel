import Icon from '../atoms/Icon'


type HotelRatingProps = {
  rating: number
}

function HotelRating({ rating }: HotelRatingProps) {
  return (
    <div className="flex items-center gap-1">
      <Icon name="⭐" />
      <span className="text-sm text-gray-600">{rating} sao</span>
    </div>
  )
}

export default HotelRating
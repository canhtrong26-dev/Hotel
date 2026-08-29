import Icon from '../atoms/Icon'
import Text from '../atoms/Text'

type HotelLocationProps = {
  city: string
}

function HotelLocation({ city }: HotelLocationProps) {
  return (
    <div className="flex items-center gap-1">
      <Icon name="📍" />
      <Text variant="text-sm text-gray-500">{city}</Text>
    </div>
  )
}

export default HotelLocation
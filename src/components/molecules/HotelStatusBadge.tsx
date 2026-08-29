import Badge from '../atoms/Badge'

type HotelStatusBadgeProps = {
  status: string
}

function HotelStatusBadge({ status }: HotelStatusBadgeProps) {
  return (
    <div>
      <Badge status={status} />
    </div>
  )
}

export default HotelStatusBadge
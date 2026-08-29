type BadgeProps = {
  status: string
}

function Badge({ status }: BadgeProps) {
  const availableStyle = 'bg-green-100 text-green-700 px-2 py-1 rounded text-sm'
  const bookedStyle = 'bg-red-100 text-red-700 px-2 py-1 rounded text-sm'

  return (
    <span className={status === 'available' ? availableStyle : bookedStyle}>
      {status === 'available' ? 'Còn phòng' : 'Hết phòng'}
    </span>
  )
}

export default Badge
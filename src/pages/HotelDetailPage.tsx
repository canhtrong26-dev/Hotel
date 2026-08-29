import { useParams } from 'react-router-dom'

function HotelDetailPage() {
  const { id } = useParams()
  return <h1>Hotel Detail Page — ID: {id}</h1>
}

export default HotelDetailPage
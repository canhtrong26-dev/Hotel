export type Hotel = {
  id: number
  name: string
  image: string
  price: number
  city: string
  address: string
  rating: number
  rooms: number
  description?: string
  status: 'available' | 'fully-booked'
}
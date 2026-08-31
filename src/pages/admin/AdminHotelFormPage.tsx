import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import type { AppDispatch } from '../../store'
import { createHotel } from '../../store/hotelSlice'

function AdminHotelFormPage() {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '',
    image: '',
    price: 0,
    city: '',
    address: '',
    rating: 1,
    rooms: 0,
    status: 'available' as 'available' | 'fully-booked'
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(prev => ({
      ...prev,
      [name]: name === 'price' || name === 'rating' || name === 'rooms'
          ? Number(value)
          : value
    }))
  } 

  const handleSubmit = async () => {
    await dispatch(createHotel(form))
    navigate('/admin/hotels')
  }

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold text-textcolor mb-6">Thêm khách sạn</h1>

      <div className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-sm">

        <input name="name" placeholder="Tên khách sạn" value={form.name}
          onChange={handleChange} className="border border-gray-200 rounded px-4 py-2 text-sm outline-none" />

        <input name="image" placeholder="URL ảnh" value={form.image}
          onChange={handleChange} className="border border-gray-200 rounded px-4 py-2 text-sm outline-none" />

        <input name="price" type="number" placeholder="Giá / đêm" value={form.price}
          onChange={handleChange} className="border border-gray-200 rounded px-4 py-2 text-sm outline-none" />

        <input name="city" placeholder="Thành phố" value={form.city}
          onChange={handleChange} className="border border-gray-200 rounded px-4 py-2 text-sm outline-none" />

        <input name="address" placeholder="Địa chỉ" value={form.address}
          onChange={handleChange} className="border border-gray-200 rounded px-4 py-2 text-sm outline-none" />

        <input name="rating" type="number" placeholder="Số sao (1-5)" value={form.rating}
          onChange={handleChange} className="border border-gray-200 rounded px-4 py-2 text-sm outline-none" />

        <input name="rooms" type="number" placeholder="Số phòng trống" value={form.rooms}
          onChange={handleChange} className="border border-gray-200 rounded px-4 py-2 text-sm outline-none" />

        <select name="status" value={form.status}
          onChange={handleChange} className="border border-gray-200 rounded px-4 py-2 text-sm outline-none">
          <option value="available">Còn phòng</option>
          <option value="fully-booked">Hết phòng</option>
        </select>

        <div className="flex gap-3 mt-2">
          <button onClick={handleSubmit}
            className="bg-primary text-white px-6 py-2 rounded hover:opacity-90">
            Lưu
          </button>
          <button onClick={() => navigate('/admin/hotels')}
            className="border border-gray-200 px-6 py-2 rounded hover:bg-gray-50">
            Hủy
          </button>
        </div>

      </div>
    </div>
  )
}

export default AdminHotelFormPage
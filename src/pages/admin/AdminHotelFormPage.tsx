import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import type { AppDispatch, RootState } from '../../store'
import { createHotel, updateHotel } from '../../store/hotelSlice'

function AdminHotelFormPage() {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const { id } = useParams()
  const isEdit = !!id  // có id → đang sửa, không có → đang thêm mới

  const hotels = useSelector((state: RootState) => state.hotels.hotels)
  const hotelToEdit = hotels.find(h => String(h.id) === String(id))

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

  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
  const newErrors: Record<string, string> = {}

  if (!form.name.trim()) newErrors.name = 'Vui lòng nhập tên khách sạn'
  if (!form.image.trim()) newErrors.image = 'Vui lòng nhập URL ảnh'
  if (!form.city.trim()) newErrors.city = 'Vui lòng nhập thành phố'
  if (!form.address.trim()) newErrors.address = 'Vui lòng nhập địa chỉ'
  if (form.price <= 0) newErrors.price = 'Giá phải lớn hơn 0'
  if (form.rating < 1 || form.rating > 5) newErrors.rating = 'Số sao từ 1 đến 5'
  if (form.rooms < 0) newErrors.rooms = 'Số phòng không được âm'

  setErrors(newErrors)
  return Object.keys(newErrors).length === 0
}


  useEffect(() => {
    if (isEdit && hotelToEdit) {
      setForm({
        name: hotelToEdit.name,
        image: hotelToEdit.image,
        price: hotelToEdit.price,
        city: hotelToEdit.city,
        address: hotelToEdit.address,
        rating: hotelToEdit.rating,
        rooms: hotelToEdit.rooms,
        status: hotelToEdit.status
      })
    }
  }, [isEdit, hotelToEdit])

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
    if (isEdit && id) {
      await dispatch(updateHotel({ id, data: form }))
    } else {
      await dispatch(createHotel(form))
    }
    navigate('/admin/hotels')
  }

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold text-textcolor mb-6">
        {isEdit ? 'Sửa khách sạn' : 'Thêm khách sạn'}
      </h1>

      <div className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-sm">

        <input name="name" placeholder="Tên khách sạn" value={form.name}
          onChange={handleChange} className="border border-gray-200 rounded px-4 py-2 text-sm outline-none" />
        {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

        <input name="image" placeholder="URL ảnh" value={form.image}
          onChange={handleChange} className="border border-gray-200 rounded px-4 py-2 text-sm outline-none" />
        {errors.image && <p className="text-red-500 text-xs">{errors.image}</p>}

        <input name="price" type="number" placeholder="Giá / đêm" value={form.price}
          onChange={handleChange} className="border border-gray-200 rounded px-4 py-2 text-sm outline-none" />
        {errors.price && <p className="text-red-500 text-xs">{errors.price}</p>}

        <input name="city" placeholder="Thành phố" value={form.city}
          onChange={handleChange} className="border border-gray-200 rounded px-4 py-2 text-sm outline-none" />
        {errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}

        <input name="address" placeholder="Địa chỉ" value={form.address}
          onChange={handleChange} className="border border-gray-200 rounded px-4 py-2 text-sm outline-none" />
        {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}

        <input name="rating" type="number" placeholder="Số sao (1-5)" value={form.rating}
          onChange={handleChange} className="border border-gray-200 rounded px-4 py-2 text-sm outline-none" />
        {errors.rating && <p className="text-red-500 text-xs">{errors.rating}</p>}

        <input name="rooms" type="number" placeholder="Số phòng trống" value={form.rooms}
          onChange={handleChange} className="border border-gray-200 rounded px-4 py-2 text-sm outline-none" />
        {errors.rooms && <p className="text-red-500 text-xs">{errors.rooms}</p>}

        <select name="status" value={form.status}
          onChange={handleChange} className="border border-gray-200 rounded px-4 py-2 text-sm outline-none">
          <option value="available">Còn phòng</option>
          <option value="fully-booked">Hết phòng</option>
        </select>

        <div className="flex gap-3 mt-2">
          <button onClick={handleSubmit}
            className="bg-primary text-white px-6 py-2 rounded hover:opacity-90">
            {isEdit ? 'Cập nhật' : 'Lưu'}
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
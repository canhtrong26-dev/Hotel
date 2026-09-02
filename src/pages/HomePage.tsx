import { useNavigate } from 'react-router-dom'

function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4">

      <h1 className="text-4xl sm:text-5xl font-bold text-textcolor mb-4">
        Tìm khách sạn <span className="text-primary">hoàn hảo</span>
      </h1>

      <p className="text-gray-500 text-lg mb-8 max-w-md">
        Khám phá hàng nghìn khách sạn trên khắp Việt Nam với giá tốt nhất!
      </p>

      <button
        onClick={() => navigate('/hotels')}
        className="bg-primary text-white px-8 py-3 rounded-xl text-lg font-medium hover:opacity-90"
      >
        Tìm khách sạn ngay →
      </button>

    </div>
  )
}

export default HomePage
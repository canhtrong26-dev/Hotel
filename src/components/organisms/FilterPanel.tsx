type FilterPanelProps = {
  city: string
  maxPrice: number
  rating: number
  onCityChange: (value: string) => void
  onMaxPriceChange: (value: number) => void
  onRatingChange: (value: number) => void
}

const cities = ['Tất cả', 'Hà Nội', 'Đà Nẵng', 'Hội An', 'Hồ Chí Minh']

function FilterPanel({ city, maxPrice, rating, onCityChange, onMaxPriceChange, onRatingChange }: FilterPanelProps) {
  return (
    <div className="flex flex-wrap gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">

      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 font-medium">Thành phố</label>
        <select
          value={city}
          onChange={(e) => onCityChange(e.target.value)}
          className="border border-gray-200 rounded px-3 py-1.5 text-sm outline-none"
        >
          {cities.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 font-medium">Giá tối đa</label>
        <select
          value={maxPrice}
          onChange={(e) => onMaxPriceChange(Number(e.target.value))}
          className="border border-gray-200 rounded px-3 py-1.5 text-sm outline-none"
        >
          <option value={0}>Tất cả</option>
          <option value={500000}>500.000₫</option>
          <option value={1000000}>1.000.000₫</option>
          <option value={2000000}>2.000.000₫</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 font-medium">Số sao</label>
        <select
          value={rating}
          onChange={(e) => onRatingChange(Number(e.target.value))}
          className="border border-gray-200 rounded px-3 py-1.5 text-sm outline-none"
        >
          <option value={0}>Tất cả</option>
          <option value={3}>3 sao</option>
          <option value={4}>4 sao</option>
          <option value={5}>5 sao</option>
        </select>
      </div>

    </div>
  )
}

export default FilterPanel
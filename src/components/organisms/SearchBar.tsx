type SearchBarProps = {
  value: string
  onChange: (value: string) => void
}

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm">
      <span>🔍</span>
      <input
        type="text"
        placeholder="Tìm kiếm khách sạn..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 outline-none text-sm text-textcolor"
      />
    </div>
  )
}

export default SearchBar
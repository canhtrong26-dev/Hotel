type PriceTagProps = {
  price: number
}

function PriceTag({ price }: PriceTagProps) {
  return (
    <span className="text-primary font-bold text-lg">
      {price.toLocaleString('vi-VN')}₫ / đêm
    </span>
  )
}

export default PriceTag
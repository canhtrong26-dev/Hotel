type ButtonProps = {
  children: string
  variant: 'primary' | 'outline'
  onClick?: () => void 
}

function Button({ children, onClick ,variant }: ButtonProps) {
  const primaryStyle = 'bg-primary text-white px-4 py-2 rounded'
  const outlineStyle = 'border border-primary text-primary px-4 py-2 rounded'

  return (
    <button className={variant === 'primary' ? primaryStyle : outlineStyle} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
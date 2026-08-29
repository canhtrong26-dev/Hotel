type TextProps = {
  children: string
  variant?: string
}

function Text({ children, variant }: TextProps) {
  return (
    <span className={variant}>
      {children}
    </span>
  )
}

export default Text
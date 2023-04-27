
interface Props extends React.ComponentProps<'a'> {}

const Link = (props: Props) => {
  const {className, children} = props
  return (
    <a {...props} className={`text-sm text-main border-b border-b-main hover:border-transparent transition-all duration-75 ${className}`}>{children}</a>
  )
}

export default Link
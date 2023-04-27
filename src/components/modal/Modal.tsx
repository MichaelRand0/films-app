
interface Props extends React.ComponentProps<'div'> {}

const Modal = (props: Props) => {
  const {children} = props
  return (
    <div className='bg-white py-6 px-8 flex flex-col items-center rounded-sm'>
      {children}
    </div>
  )
}

export default Modal
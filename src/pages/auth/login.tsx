import Modal from '@/components/modal/Modal'
import AuthViewBase from './components/AuthViewBase'
import Title from '@/components/typography/Title'
import { i18n } from '@/locales'
import Link from '@/components/typography/Link'
import ButtonMain from '@/components/buttons/ButtonMain'
import InputMain from '@/components/inputs/InputMain'
import { object, string } from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Route from 'next/link'

interface Props extends React.ComponentProps<'div'> {}

const Login = (props: Props) => {
  const schema = object({
    name: string().required('Обязательное поле'),
  })
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  return (
    <AuthViewBase>
      <Modal>
        <Title tag="h2" className="mb-5">
          {i18n._auth.auth}
        </Title>
        <InputMain error="Error message" containerClassName="mb-3" label={i18n._auth.login} />
        <InputMain containerClassName="mb-3" label={i18n._auth.password} />
        <Route className='ml-auto' href='/auth/signup'>
          <Link>{i18n._auth.createAccount}</Link>
        </Route>
        <ButtonMain className="mt-10">{i18n._auth.signIn}</ButtonMain>
      </Modal>
    </AuthViewBase>
  )
}

export default Login
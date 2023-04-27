import Modal from '@/components/modal/Modal'
import AuthViewBase from './components/AuthViewBase'
import Title from '@/components/typography/Title'
import { i18n } from '@/locales'
import InputMain from '@/components/inputs/InputMain'
import Link from '@/components/typography/Link'
import ButtonMain from '@/components/buttons/ButtonMain'
import Route from 'next/link'

interface Props extends React.ComponentProps<'div'> {}

const SignUp = (props: Props) => {
  return (
    <AuthViewBase>
      <Modal>
        <Title tag="h2" className="mb-5">
          {i18n._auth.registration}
        </Title>
        <InputMain error="Error message" containerClassName="mb-3" label={i18n._auth.login} />
        <InputMain containerClassName="mb-3" label={i18n._auth.password} />
        <InputMain containerClassName="mb-3" label={i18n._auth.repeatPassword} />
        <Route className="ml-auto" href="/auth/login">
          <Link>{i18n._auth.signIn}</Link>
        </Route>
        <ButtonMain className="mt-10">{i18n._auth.signUp}</ButtonMain>
      </Modal>
    </AuthViewBase>
  )
}

export default SignUp

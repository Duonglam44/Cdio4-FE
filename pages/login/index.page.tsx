import React, { useEffect } from 'react'
import { ButtonType } from '../../types/componentTypes'
import { FormButton } from '../../components/Form-Button'
import { LoginForm } from './components/loginForm'
import { useRouter } from 'next/router'
import { RootStateOrAny, useSelector } from 'react-redux'
import { getJwt } from 'utils/Auth'

const Login: React.FC = () => {
  const router = useRouter()
  const loading = useSelector((state: RootStateOrAny) => state.auth.loading)

  useEffect(() => {
    checkLogin()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  const checkLogin = () => {
    const LoginToken = getJwt()

    if (!LoginToken) {
      return
    }
    router.replace('/')
  }

  if (loading) return (<div>loading...</div>)

  return (
    <div className='signIn'>
      <div className='signIn__content'>
        <div className='signIn__logo'>
          <img src='./assets/images/Logo.png' alt='' />
        </div>
        <div className='signIn__context'>
          <LoginForm />
          <div>
            <FormButton type={ButtonType.SUBMIT} className='forgotPassword'
              onClick={() => { router.replace('/forgot-password') }}
            >
              Forgot Password
            </FormButton>
            <FormButton type={ButtonType.SUBMIT}
              onClick={() => { router.replace('/signin') }}
            >Create New Account</FormButton>
          </div>
        </div>
        <div className='signIn__copyright'>
          <p>copyright © 2021 GuruAcademy LLC.All rights reversed.</p>
          <p>Terms of Use| privacy Policy</p>
        </div>
      </div>
      <div className='signIn__background'>
        <img src='./assets/images/Login.png' alt='sign in background' />
      </div>
    </div>
  )
}

export default Login

import React, { useState } from 'react'
import { ButtonType } from '../../types/componentTypes'
import { FormButton } from '../../components/Form-Button'
import { LoginForm } from './components/loginForm'
import { useRouter } from 'next/router'

const Login: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()

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

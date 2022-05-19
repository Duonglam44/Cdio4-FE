import React from 'react'
import { SignupForm } from './components/SignupForm'
import { RootStateOrAny, useSelector } from 'react-redux'
import { FixedLoading } from 'components/fixed-loading'

const SignUp = () => {
  const loading = useSelector((state: RootStateOrAny) => state.auth.loading)

  return (
    <div className='signIn'>
      { loading && <FixedLoading /> }
      <div className='signIn__content'>
        <div className='signIn__logo'>
          <img src='./assets/images/Logo.png' alt='' />
        </div>
        <div className='signIn__context'>
          <SignupForm />
        </div>
        <div className='signIn__copyright'>
          <p>copyright © 2022 GuruAcademy LLC.All rights reversed.</p>
          <p>Terms of Use| privacy Policy</p>
        </div>
      </div>
      <div className='signIn__background d-none d-lg-block'>
        <img src='./assets/images/Login.png' alt='sign in background' />
      </div>
    </div>
  )
}

export default SignUp

import React, { useEffect } from 'react'
import { SignupForm } from './components/SignupForm'
import { useRouter } from 'next/router'
import { getJwt } from 'utils/Auth'
import { RootStateOrAny, useSelector } from 'react-redux'

const SignUp = () => {
  const router = useRouter()
  const loading = useSelector((state: RootStateOrAny) => state.auth.loading)

  useEffect(() => {
    const token = getJwt()
    if (!token) return
    router.replace('/')

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) return (<div>loading</div>)

  return (
    <div className='signIn'>
      <div className='signIn__content'>
        <div className='signIn__logo'>
          <img src='./assets/images/Logo.png' alt='' />
        </div>
        <div className='signIn__context'>
          <SignupForm />
        </div>
        <div className='signIn__copyright'>
          <p>copyright © 2021 GuruAcademy LLC.All rights reversed.</p>
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

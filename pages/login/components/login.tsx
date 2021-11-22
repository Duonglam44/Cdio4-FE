import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import { Formik, Form, Field } from 'formik'

const LoginFc: FunctionComponent = () => {

  return (
    <div className='signIn'>
      <div className='signIn__content'>
        <div className='signIn__logo'>{/* <img src={logo} alt=' /> */}</div>
        <div className='signIn__context'>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={(value) => {
              // console.log(values)
            }}
          >
            {({ errors, touched }) => (
              <Form
                className='signIn__context-form'
                style={{ marginTop: '30px' }}
              >
                <label htmlFor='email' className='signIn__context-label'>
                  Email
                  {errors.email && touched.email && <span>{errors.email}</span>}
                </label>
                <Field
                  name='email'
                  type='email'
                  className='signIn__context-input'
                  // validate={validateEmail}
                />

                <label htmlFor='password' className='signIn__context-label'>
                  password
                  {errors.password && touched.password && (
                    <span>{errors.password}</span>
                  )}
                </label>
                <Field
                  name='password'
                  type='password'
                  className='signIn__context-input'
                  // validate={validateInput}
                />

                <button className='signIn__context-button' type='submit'>
                  Sign in
                </button>
              </Form>
            )}
          </Formik>
          <div className='w-100'>
            <div className='signIn__option forgotPassword'>
              <Link href='forgotPassword'>Forgot password</Link>
            </div>
            <div className='signIn__option new-account'>
              <Link href='signup'>Create new account</Link>
            </div>
          </div>
        </div>
        <div className='signIn__copyright'>
          <p>copyright © 2021 GuruAcademy LLC.All rights reversed.</p>
          <p>Terms of Use| privacy Policy</p>
        </div>
      </div>
      <div className='signIn__background d-none d-lg-block'>
        {/* <img src={bgLogin} alt=' /> */}
      </div>
    </div>
  )
}

export default LoginFc

import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from '../../../components/input'
import { FormButton } from '../../../components/Form-Button'
import { ButtonType } from '../../../types/componentTypes'
import { getJwt } from '../../../utils/Auth'
import { useRouter } from 'next/router'
import { LoginThunkAction } from '../../../redux/login/thunks'
import { toast } from 'react-toastify'
const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email is not correct!')
    .required('Email is required!'),
  password: yup.string().required('You have to enter password!'),
})

export const LoginForm: React.FC = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const userInfo = useSelector(state => state)

  const formik = useFormik({
    validationSchema,
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values: any) => {
      const errorFunc = (error: string) => {
        toast.error(error)
      }
      dispatch(LoginThunkAction(values, errorFunc))
    }
  })

  useEffect(() => {
    checkLogin()
    // eslint-disable-next-line
  }, [userInfo])

  const checkLogin = () => {
    const LoginToken = getJwt()

    if (!LoginToken) {
      return
    }
    router.replace('/')
  }

  return (
    <form
      onSubmit={formik.handleSubmit}
      className='signIn__context-form'
      style={{ marginTop: '30px' }}
    >
      <Input
        type='email'
        name='email'
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
        label='email'
      />

      <Input
        type='password'
        name='password'
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
        label='password'
      />

      <FormButton type={ButtonType.SUBMIT}>Sign In</FormButton>
    </form>
  )
}

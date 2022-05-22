import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { Input } from '../../../components/input'
import { FormButton } from '../../../components/Form-Button'
import { ButtonType } from '../../../types/componentTypes'
import { LoginThunkAction } from '../../../redux/login/thunks'
import { toast } from 'react-toastify'

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email is not correct!')
    .required('Email is required!'),
  password: yup.string().required('You need to enter password!'),
})

export const LoginForm: React.FC = () => {
  const dispatch = useDispatch()

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

  const handleError = (touched?: boolean, error?: string) => {
    return error && touched ? error : null!
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
        error={handleError(formik.touched.email, formik.errors.email)}
        label='Email'
      />

      <Input
        type='password'
        name='password'
        value={formik.values.password}
        onChange={formik.handleChange}
        error={handleError(formik.touched.password, formik.errors.password)}
        label='Password'
      />

      <FormButton type={ButtonType.SUBMIT}>Sign In</FormButton>
    </form>
  )
}

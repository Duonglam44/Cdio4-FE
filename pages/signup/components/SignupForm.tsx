import { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Input } from '../../../components/input'
import { FormButton } from '../../../components/Form-Button'
import { ButtonType } from '../../../types/componentTypes'
import { SignUpThunkAction } from '../../../redux/login/thunks'
import { toast } from 'react-toastify'
import { Checkbox, FormControlLabel, Button } from '@material-ui/core'
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux'
import router from 'next/router'
import { clearSucceededCreate } from 'redux/login/actions'

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('This field is required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('This field is required'),
  email: Yup.string().email('Invalid Email').required('This field is required'),
  password: Yup.string()
    .min(8, 'Password must be more than 8 characters')
    .max(30, 'Password must be less than 8 characters')
    .required('This field is required'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password')],
    'Password is not match'
  ),
  cv: Yup.string(),
})

export const SignupForm = () => {
  const [isPopupCVField, setIsPopupCVField] = useState<boolean>(false)
  const dispatch = useDispatch()
  const createCompleted = useSelector((state: RootStateOrAny) => state.auth.createCompleted)
  const formik = useFormik({
    validationSchema,
    initialValues: {
      cv: '',
      firstName: '',
      lastName: '',
      email: '',
      role: 1,
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values: any) => {
      handleSubmit(values)
    },
  })

  const handleSubmit = (values) => {
    const params = { ...values }
    delete params.cv
    delete params.confirmPassword
    const errorFunc = (error: string) => {
      toast.error(error)
    }
    dispatch(SignUpThunkAction(values, errorFunc))
  }

  useEffect(() => {
    if (!createCompleted) return
    router.push('/login')

    return () => {
      dispatch(clearSucceededCreate())
    }
  }, [createCompleted])

  return (
    <form
      onSubmit={formik.handleSubmit}
      className='signIn__context-form'
      style={{ marginTop: '-40px' }}
    >
      <Input
        name='firstName'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.firstName}
        label='First Name'
        error={formik.errors.firstName}
      />
      <Input
        name='lastName'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.lastName}
        label='Last Name'
        error={formik.errors.lastName}
      />
      <Input
        name='email'
        type='email'
        onChange={formik.handleChange}
        value={formik.values.email}
        label='Email'
        error={formik.errors.email}
      />
      <Input
        name='password'
        type='password'
        onChange={formik.handleChange}
        value={formik.values.password}
        label='Password'
        error={formik.errors.password}
      />
      <Input
        name='confirmPassword'
        type='password'
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
        label='Confirm Password'
        error={formik.errors.confirmPassword}
      />

      <input
        type='file'
        name='cv'
        id='cv'
        onChange={formik.handleChange}
        value={formik.values.cv}
        hidden={true}
      />
      {isPopupCVField && (
        <Button
          variant='outlined'
          type='button'
          onClick={() => {
            document.getElementById('cv')?.click()
          }}
        >
          Upload CV
        </Button>
      )}

      <FormControlLabel
        label='Continue with teacher?'
        labelPlacement='end'
        control={
          <Checkbox
            name='role'
            onChange={(e) => {
              if (e.target.checked) {
                formik.setFieldValue('role', 2)
                setIsPopupCVField(true)

                return
              }
              setIsPopupCVField(false)
              formik.setFieldValue('role', 1)
            }}
            value={formik.values.role}
          />
        }
      />

      <FormButton type={ButtonType.SUBMIT}>Sign Up</FormButton>
    </form>
  )
}

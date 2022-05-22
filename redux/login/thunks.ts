import { LoginParams } from './types'
import { api } from '../../utils/api'
import { MethodTypes } from '../../types/MethodTypes'
import { loginWithJwt } from '../../utils/Auth'
import { toast } from 'react-toastify'
import {
  GetUseSucceeded,
  GetUserRequest,
  GetUserFailed,
  SignUpRequest,
  SignUpSucceeded,
  SignUpFailed,
  LoginRequest,
  LoginFailed,
  LoginSucceeded,
} from './actions'

export const GetUserDataThunkAction =
  (token: string | null) => async (dispatch: any) => {
    dispatch(GetUserRequest())
    if (!token) {
      return
    }
    const res: any = await api({
      path: '/users/all-info',
      method: MethodTypes.GET,
      needThrowError: false,
      errorHandler: () => {
        dispatch(GetUserFailed())
      },
    })
    dispatch(GetUseSucceeded(res.data.user))
  }

export const LoginThunkAction =
  (params: LoginParams, errorFunc) => async (dispatch: any) => {
    dispatch(LoginRequest())
    const res: any = await api({
      path: '/auth/login',
      method: MethodTypes.POST,
      needThrowError: false,
      data: { ...params },
      errorHandler: (error) => {
        dispatch(LoginFailed())
        errorFunc(error)
      },
    })
    toast.success(res.message)
    loginWithJwt(res?.data.token)
    dispatch(GetUserDataThunkAction(res?.data.token))
    dispatch(LoginSucceeded(res?.data.data))
  }

export const SignUpThunkAction =
  (params: any, errorFunc) => async (dispatch: any) => {
    dispatch(SignUpRequest())
    const res: any = await api({
      path: '/auth/signup',
      method: 'POST',
      data: { ...params },
      needThrowError: false,
      errorHandler: (error) => {
        dispatch(SignUpFailed())
        errorFunc(error)
      },
    })
    toast.success(res.message)
    dispatch(SignUpSucceeded())
  }

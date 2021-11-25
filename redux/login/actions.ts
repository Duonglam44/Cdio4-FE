import { LoginActions, LoginParams } from './types'
import { api } from '../../utils/api'
import { MethodTypes } from '../../types/MethodTypes'
import { loginWithJwt } from '../../utils/Auth'
import { toast } from 'react-toastify'

export const Logout = (value: string) => {
  return {
    type: LoginActions.LOGOUT,
  }
}

export const GetUserData = (res: any) => {
  return {
    type: LoginActions.GET_USER_DATA,
    payload: res,
  }
}

export const GetUserDataThunkAction =
  (token: string | null) => async (dispatch: any) => {
    try {
      if (!token) {
        return
      }

      const res: any = await api({
        path: '/auth',
        method: MethodTypes.GET,
        needThrowError: false,
      })
      dispatch(GetUserData({ ...res?.data.user }))
    } catch (error: any) {
      throw error
    }
  }

export const LoginThunkAction =
  (params: LoginParams, errorFunc) => async (dispatch: any) => {
    try {
      const res: any = await api({
        path: '/auth/login',
        method: MethodTypes.POST,
        needThrowError: false,
        data: { ...params },
        errorHandler: (error) => {
          errorFunc(error)
        },
      })
      toast.success(res.message)
      loginWithJwt(res?.data.token)
      dispatch(GetUserDataThunkAction(res?.data.token))
    } catch (error: any) {
      throw error
    }
  }

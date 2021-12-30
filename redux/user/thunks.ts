import { api } from '../../utils/api'
import { getUserFailed, getUserSucceeded, getUserRequest } from './actions'

export const GetUser =
  (id: string) => async (dispatch: any) => {
    dispatch(getUserRequest())
    const res: any = await api({
      path: `/users/${id}/profile`,
      method: 'GET',
      needThrowError: false,
      errorHandler: (error) => {
        dispatch(getUserFailed())
      }
    })
    dispatch(getUserSucceeded({ ...res?.data?.user }))
  }

import { GetUser } from './types'

// get user info
export const getUserRequest = () => {
  return {
    type: GetUser.GET_USER_REQUEST,
    loading: true,
  }
}

export const getUserSucceeded = (res) => {
  return {
    type: GetUser.GET_USER_SUCCEEDED,
    userData: res,
    loading: false,
  }
}

export const getUserFailed = () => {
  return {
    type: GetUser.GET_USER_FAILED,
    loading: false,
    userData: null,
  }
}

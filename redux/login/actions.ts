import { LoginActions, SignUpActions } from './types'

// sign up actions
export const SignUpRequest = () => {
  return {
    type: SignUpActions.SIGN_UP_REQUEST,
    loading: true
  }
}
export const SignUpSucceeded = () => {
  return {
    type: SignUpActions.SIGN_UP_SUCCEEDED,
    createCompleted: true,
    loading: false
  }
}
export const SignUpFailed = () => {
  return {
    type: SignUpActions.SIGN_UP_FAILED,
    loading: false
  }
}
// get user data actions
export const GetUserData = (res: any) => {
  return {
    type: LoginActions.GET_USER_DATA,
    payload: res,
  }
}

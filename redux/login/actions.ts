import { LoginActions, SignUpActions, UserDataActions, LogoutActions } from './types'

// sign in actions
export const LoginRequest = () => {
  return {
    type: LoginActions.SIGN_IN_REQUEST,
    loading: true,
  }
}
export const LoginSucceeded = () => {
  return {
    type: LoginActions.SIGN_IN_SUCCEEDED,
    loading: false,
  }
}
export const LoginFailed = () => {
  return {
    type: LoginActions.SIGN_IN_FAILED,
    loading: false,
  }
}
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
//  logout action
export const logout = () => {
  return {
    type: LogoutActions.LOGOUT_SUCCEEDED,
    loading: false
  }
}
// get user data actions
export const GetUserData = (res: any) => {
  return {
    type: UserDataActions.GET_USER_DATA,
    payload: res,
  }
}

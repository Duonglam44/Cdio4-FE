export enum UserDataActions {
  GET_USER_DATA = 'GET_USER_DATA',
}

export enum LoginActions {
  SIGN_IN_REQUEST = 'SIGN_IN_REQUEST',
  SIGN_IN_SUCCEEDED = 'SIGN_IN_SUCCEEDED',
  SIGN_IN_FAILED = 'SIGN_IN_FAILED',
}

export enum SignUpActions {
  SIGN_UP_REQUEST = 'SIGN_UP_REQUEST',
  SIGN_UP_SUCCEEDED = 'SIGN_UP_SUCCEEDED',
  SIGN_UP_FAILED = 'SIGN_UP_FAILED',
}

export enum LogoutActions {
  LOGOUT_SUCCEEDED = 'LOGOUT_SUCCEEDED',
}

export interface LoginParams {
  email: string
  password: string
}

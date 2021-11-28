export enum LoginActions {
  SIGN_IN = 'SIGN_IN',
  GET_USER_DATA = 'GET_USER_DATA',
}

export enum SignUpActions {
  SIGN_UP_REQUEST = 'SIGN_UP_REQUEST',
  SIGN_UP_SUCCEEDED = 'SIGN_UP_SUCCEEDED',
  SIGN_UP_FAILED = 'SIGN_UP_FAILED',
}

export interface LoginParams {
  email: string
  password: string
}

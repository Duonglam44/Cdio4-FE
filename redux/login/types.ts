export enum LoginActions {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  GET_USER_DATA = 'GET_USER_DATA',
}

export interface LoginParams {
  email: string
  password: string
}

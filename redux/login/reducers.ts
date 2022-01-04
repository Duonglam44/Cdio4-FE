import {
  LoginActions,
  SignUpActions,
  UserDataActions,
  LogoutActions,
} from './types'
// import { UserInfo } from './../../types'
import { logout } from '../../utils/Auth'

const initialState: any = {
  data: null,
  loading: false,
}

export const auth = (state = initialState, action: any) => {
  switch (action.type) {
    // login actions
    case LoginActions.SIGN_IN_REQUEST:
      return {
        ...state,
        loading: action.loading,
      }
    case LoginActions.SIGN_IN_SUCCEEDED:
      return {
        ...state,
        data: action.data,
        loading: action.loading,
      }
    case LoginActions.SIGN_IN_FAILED:
      return {
        ...state,
        loading: action.loading,
      }
    //  sign up actions
    case SignUpActions.SIGN_UP_REQUEST:
      return {
        ...state,
        loading: action?.loading,
      }
    case SignUpActions.SIGN_UP_SUCCEEDED:
      return {
        ...state,
        createCompleted: action?.createCompleted,
        loading: action?.loading,
      }
    case SignUpActions.SIGN_UP_FAILED:
      return {
        ...state,
        loading: action?.loading,
      }
    case SignUpActions.REMOVE_SUCCEEDED_CREATE:
      return {
        ...state,
        loading: action?.loading,
        createCompleted: action?.createCompleted,
      }
    // logout action
    case LogoutActions.LOGOUT_SUCCEEDED:
      logout()

      return {
        ...state,
        loading: action?.loading,
      }
    //  get use data actions
    case UserDataActions.GET_USER_DATA_REQUEST:
      return {
        ...state,
        loading: action.loading,
      }
    case UserDataActions.GET_USER_DATA_SUCCEEDED:
      return {
        ...state,
        data: action.data,
        loading: action.loading,
      }
    case UserDataActions.GET_USER_DATA_FAILED:
      return {
        ...state,
        loading: action.loading,
      }
    default:
      return state
  }
}

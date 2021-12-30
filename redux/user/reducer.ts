import { GetUser } from './types'

const initialState: any = {
  userData: null!,
  loading: false,
}

export const user = (state = initialState, action: any) => {
  switch (action.type) {
    case GetUser.GET_USER_REQUEST:
      return {
        ...state,
        loading: action.loading,
      }
    case GetUser.GET_USER_SUCCEEDED:
      return {
        ...state,
        userData: action.userData,
        loading: action.loading,
      }
    case GetUser.GET_USER_FAILED:
      return {
        ...state,
        userData: action.userData,
        loading: action.loading,
      }
    default:
      return state
  }
}

import { LoginActions, SignUpActions, UserDataActions } from './types'
// import { UserInfo } from './../../types'

const initialState: any = {
  data: {
    _id: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    address: '',
    email: '',
    role: {},
    teachingCourses: [],
    notifications: [],
    learningCourses: [],
    createdAt: '',
  },
  loading: false,
}

export const userInfo = (state = initialState, action: any) => {
  switch (action.type) {
    // login actions
    case LoginActions.SIGN_IN_REQUEST:
      return {
        ...state,
        loading: action.loading
      }
    case LoginActions.SIGN_IN_SUCCEEDED:
      return {
        ...state,
        loading: action.loading
      }
    case LoginActions.SIGN_IN_FAILED:
      return {
        ...state,
        loading: action.loading
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
    //  get use data acitons
    case UserDataActions.GET_USER_DATA:
      return {
        ...state,
        ...action?.payload,
      }
    default:
      return state
  }
}

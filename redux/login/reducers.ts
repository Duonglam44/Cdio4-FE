import { LoginActions, SignUpActions } from './types'
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
  loading: false
}

export const userInfo = (state = initialState, action: any) => {
  switch (action.type) {
    case LoginActions.SIGN_IN:
      return {
        ...state,
        ...action?.userId,
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
    case LoginActions.GET_USER_DATA:
      return {
        ...state,
        ...action?.payload,
      }
    default:
      return state
  }
}

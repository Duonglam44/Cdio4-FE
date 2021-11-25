import { LoginActions } from './types'
import { UserInfo } from './../../types'

const initialState: UserInfo = {
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
}

export const userInfo = (state = initialState, action: any) => {
  switch (action.type) {
    case LoginActions.LOGOUT:
      return {
        ...state,
        value: '',
      }
    case LoginActions.GET_USER_DATA:
      return {
        ...state,
        ...action?.payload,
      }
    default:
      return state
  }
}

import { CreateCourse, GetCourseById } from './types'

const initialState = {
  courses: [],
  loading: null!,
  currentCreateCourseId: '',
  courseItem: {}
}

export const courseReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CreateCourse.CREATE_COURSE_REQUEST:
      return {
        ...state,
        loading: action.loading,
      }
    case CreateCourse.CREATE_COURSE_SUCCEEDED:
      return {
        ...state,
        loading: action.loading,
        currentCreateCourseId: action.currentCreateCourseId,
      }
    case CreateCourse.CREATE_COURSE_FAILED:
      return {
        ...state,
        loading: action.loading,
      }
    //
    case GetCourseById.GET_COURSE_REQUEST:
      return {
        ...state,
        loading: action.loading,
      }
    case GetCourseById.GET_COURSE_SUCCEEDED:
      return {
        ...state,
        loading: action.loading,
        courseItem: action.courseItem
      }
    case GetCourseById.GET_COURSE_FAILED:
      return {
        ...state,
        loading: action.loading,
      }
    default:
      return state
  }
}

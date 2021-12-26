import {
  CreateCourse,
  GetCourseById,
  GetCourses,
  GetCoursesPagination,
  SearchCourses,
} from "./types"

const initialState = {
  courses: [],
  totalCourses: 0,
  loading: null!,
  currentCreateCourseId: "",
  courseItem: {},
}

export const courseReducer = (state = initialState, action: any) => {
  switch (action.type) {
    // create course
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
    // get a course by id
    case GetCourseById.GET_COURSE_REQUEST:
      return {
        ...state,
        loading: action.loading,
      }
    case GetCourseById.GET_COURSE_SUCCEEDED:
      return {
        ...state,
        loading: action.loading,
        courseItem: action.courseItem,
      }
    case GetCourseById.GET_COURSE_FAILED:
      return {
        ...state,
        loading: action.loading,
      }
    // get courses
    case GetCourses.GET_COURSES_REQUEST:
      return {
        ...state,
        loading: action.loading,
      }
    case GetCourses.GET_COURSES_SUCCEEDED:
      return {
        ...state,
        courses: action.courses,
        totalCourses: action.totalCourses,
        loading: action.loading,
      }
    case GetCourses.GET_COURSES_FAILED:
      return {
        ...state,
        loading: action.loading,
      }
    // get courses pagination
    case GetCoursesPagination.GET_COURSES_REQUEST:
      return {
        ...state,
        loading: action.loading,
      }
    case GetCoursesPagination.GET_COURSES_SUCCEEDED:
      return {
        ...state,
        courses: action.courses,
        totalCourses: action.totalCourses,
        loading: action.loading,
      }
    case GetCoursesPagination.GET_COURSES_FAILED:
      return {
        ...state,
        loading: action.loading,
      }
    // search courses
    case SearchCourses.SEARCH_COURSES_REQUEST:
      return {
        ...state,
        loading: action.loading,
      }
    case SearchCourses.SEARCH_COURSES_SUCCEEDED:
      return {
        ...state,
        courses: action.courses,
        totalCourses: action.totalCourses,
        loading: action.loading,
      }
    case SearchCourses.SEARCH_COURSES_FAILED:
      return {
        ...state,
        loading: action.loading,
      }
    default:
      return state
  }
}

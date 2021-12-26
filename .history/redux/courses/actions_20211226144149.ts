import { CreateCourse, GetCourseById, GetCourses, SearchCourses } from './types'

// create course actions
export const createCourseRequest = () => {
  return {
    type: CreateCourse.CREATE_COURSE_REQUEST,
    loading: true,
  }
}

export const createCourseSucceeded = (res: any) => {
  return {
    type: CreateCourse.CREATE_COURSE_SUCCEEDED,
    loading: false,
    currentCreateCourseId: res
  }
}

export const createCourseFailed = () => {
  return {
    type: CreateCourse.CREATE_COURSE_FAILED,
    loading: true,
  }
}

// get course by id action
export const getCourseByIdRequest = () => {
  return {
    type: GetCourseById.GET_COURSE_REQUEST,
    loading: true,
  }
}

export const getCourseByIdSucceeded = (res) => {
  return {
    type: GetCourseById.GET_COURSE_SUCCEEDED,
    loading: false,
    courseItem: res
  }
}

export const getCourseByIdFailed = () => {
  return {
    type: GetCourseById.GET_COURSE_FAILED,
    loading: false,
  }
}

// get courses actions
export const getCoursesRequest = () => {
  return {
    type: GetCourses.GET_COURSES_REQUEST,
    loading: true,
  }
}

export const getCoursesSucceeded = (courses, totalCourses) => {
  return {
    courses,
  totalCourses,
    type: GetCourses.GET_COURSES_SUCCEEDED,
    loading: false,
  }
}

export const getCoursesFailed = () => {
  return {
    type: GetCourses.GET_COURSES_FAILED,
    loading: false,
  }
}

// get courses pagination
export const getCoursesPaginationRequest = () => {
  return {
    type: GetCourses.GET_COURSES_REQUEST,
    loading: true,
  }
}

export const getCoursesPaginationSucceeded = (courses, totalCourses) => {
  return {
    type: GetCourses.GET_COURSES_SUCCEEDED,
    courses: courses,
    totalCourses: totalCourses,
    loading: false,
  }
}

export const getCoursesPaginationFailed = () => {
  return {
    type: GetCourses.GET_COURSES_FAILED,
    loading: false,
  }
}

// search courses actions
export const searchCoursesRequest = () => {
  return {
    type: SearchCourses.SEARCH_COURSES_REQUEST,
    loading: true
  }
}

export const searchCoursesSucceeded = (courses, totalCourses) => {
  return {
    type: GetCourses.GET_COURSES_SUCCEEDED,
    courses: courses,
    totalCourses: totalCourses,
    loading: false,
  }
}

export const searchCoursesFailed = () => {
  return {
    type: GetCourses.GET_COURSES_FAILED,
    loading: false,
  }
}
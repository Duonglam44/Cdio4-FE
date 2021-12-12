import { CreateCourse, GetCourseById } from './types'

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

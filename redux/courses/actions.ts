import { CreateCourse } from './types'

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

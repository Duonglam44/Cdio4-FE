import { CreateLesson } from './types'

export const createLessonRequest = () => {
  return {
    type: CreateLesson.CREATE_LESSON_REQUEST,
    createLoading: true,
  }
}
export const createLessonSucceeded = (res) => {
  return {
    type: CreateLesson.CREATE_LESSON_SUCCEEDED,
    createLoading: false,
    currentCreatedLessonId: res
  }
}
export const createLessonFailed = () => {
  return {
    type: CreateLesson.CREATE_LESSON_FAILED,
    createLoading: false,
  }
}

import { CreateLesson, CreateChapter } from './types'

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
// create chapter
export const createAttachmentRequest = () => {
  return {
    type: CreateChapter.CREATE_ATTACHMENT_REQUEST,
    createLoading: true,
  }
}
export const createAttachmentSucceeded = (res) => {
  return {
    type: CreateChapter.CREATE_ATTACHMENT_SUCCEEDED,
    createLoading: false,
    currentCreateAttachmentId: res
  }
}
export const createAttachmentFailed = () => {
  return {
    type: CreateChapter.CREATE_ATTACHMENT_FAILED,
    createLoading: false,
  }
}

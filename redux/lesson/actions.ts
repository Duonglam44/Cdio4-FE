import {
  CreateLesson,
  CreateAttachment,
  UpdateLesson,
  DeleteLesson,
  DeleteAttachment,
  TakeCurrentLesson,
  GetLessonById,
} from './types'

export const createLessonRequest = () => {
  return {
    type: CreateLesson.CREATE_LESSON_REQUEST,
    loading: true,
  }
}
export const createLessonSucceeded = (res) => {
  return {
    type: CreateLesson.CREATE_LESSON_SUCCEEDED,
    loading: false,
    currentCreateLesson: res,
  }
}
export const createLessonFailed = () => {
  return {
    type: CreateLesson.CREATE_LESSON_FAILED,
    loading: false,
  }
}
// update lesson actions
export const updateLessonRequest = () => {
  return {
    type: UpdateLesson.UPDATE_LESSON_REQUEST,
    createLoading: true,
  }
}
export const updateLessonSucceeded = () => {
  return {
    type: UpdateLesson.UPDATE_LESSON_SUCCEEDED,
    createLoading: false,
  }
}
export const updateLessonFailed = () => {
  return {
    type: UpdateLesson.UPDATE_LESSON_FAILED,
    createLoading: false,
  }
}
// delete lesson actions
export const deleteLessonRequest = () => {
  return {
    type: DeleteLesson.DELETE_LESSON_REQUEST,
    loading: true,
  }
}
export const deleteLessonSucceeded = (res: string) => {
  return {
    type: DeleteLesson.DELETE_LESSON_SUCCEEDED,
    loading: false,
    deletedLessonId: res,
  }
}
export const deleteLessonFailed = () => {
  return {
    type: DeleteLesson.DELETE_LESSON_FAILED,
    loading: false,
  }
}
// create attachment
export const createAttachmentRequest = () => {
  return {
    type: CreateAttachment.CREATE_ATTACHMENT_REQUEST,
    createLoading: true,
  }
}
export const createAttachmentSucceeded = (res) => {
  return {
    type: CreateAttachment.CREATE_ATTACHMENT_SUCCEEDED,
    createLoading: false,
    currentCreateAttachment: res,
  }
}
export const createAttachmentFailed = () => {
  return {
    type: CreateAttachment.CREATE_ATTACHMENT_FAILED,
    createLoading: false,
  }
}
// delete attachment
export const deleteAttachmentRequest = () => {
  return {
    type: DeleteAttachment.DELETE_ATTACHMENT_REQUEST,
    loading: true,
  }
}
export const deleteAttachmentSucceeded = (res: string) => {
  return {
    type: DeleteAttachment.DELETE_ATTACHMENT_SUCCEEDED,
    loading: false,
    deletedAttachmentId: res,
  }
}
export const deleteAttachmentFailed = () => {
  return {
    type: DeleteAttachment.DELETE_ATTACHMENT_REQUEST,
    loading: false,
  }
}
// take current lesson
export const takeCurrentLesson = (res: any) => {
  return {
    type: TakeCurrentLesson.TAKE_CURRENT_LESSON,
    currentLesson: res,
  }
}
// get lesson by id
export const getLessonByIdRequest = () => {
  return {
    type: GetLessonById.GET_LESSON_REQUEST,
    loading: true,
  }
}

export const getLessonByIdSucceeded = (res: any) => {
  return {
    type: GetLessonById.GET_LESSON_SUCCEEDED,
    loading: false,
    currentLesson: res
  }
}

export const getLessonByIdFailed = () => {
  return {
    type: GetLessonById.GET_LESSON_FAILED,
    loading: false,
  }
}

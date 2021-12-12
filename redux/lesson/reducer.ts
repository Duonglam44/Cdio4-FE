import {
  CreateLesson,
  CreateAttachment,
  UpdateLesson,
  DeleteLesson,
  DeleteAttachment,
} from './types'

const initialState = {
  loading: null,
  createLoading: null!,
  currentCreateLesson: [],
  currentCreateAttachment: null,
  deletedAttachmentId: ''
}
// eslint-disable-next-line
export const lessonReducer = (state = initialState, action) => {
  switch (action.type) {
    case CreateLesson.CREATE_LESSON_REQUEST:
      return {
        ...state,
        loading: action.loading,
      }
    case CreateLesson.CREATE_LESSON_SUCCEEDED:
      return {
        ...state,
        loading: action.loading,
        currentCreateLesson: action.currentCreateLesson,
      }
    case CreateLesson.CREATE_LESSON_FAILED:
      return {
        ...state,
        loading: action.loading,
      }
    // update lesson actions
    case UpdateLesson.UPDATE_LESSON_REQUEST:
      return {
        ...state,
        createLoading: action.createLoading,
      }
    case UpdateLesson.UPDATE_LESSON_SUCCEEDED:
      return {
        ...state,
        createLoading: action.createLoading,
      }
    case UpdateLesson.UPDATE_LESSON_FAILED:
      return {
        ...state,
        createLoading: action.createLoading,
      }
    // delete lesson lesson
    case DeleteLesson.DELETE_LESSON_REQUEST:
      return {
        ...state,
        loading: action.loading,
      }
    case DeleteLesson.DELETE_LESSON_SUCCEEDED:
      return {
        ...state,
        loading: action.loading,
        deletedLessonId: action.deletedLessonId,
      }
    case DeleteLesson.DELETE_LESSON_FAILED:
      return {
        ...state,
        loading: action.loading,
      }
    // create attachment action
    case CreateAttachment.CREATE_ATTACHMENT_REQUEST:
      return {
        ...state,
        createLoading: action.createLoading,
      }
    case CreateAttachment.CREATE_ATTACHMENT_SUCCEEDED:
      return {
        ...state,
        createLoading: action.createLoading,
        currentCreateAttachment: action.currentCreateAttachment,
      }
    case CreateAttachment.CREATE_ATTACHMENT_FAILED:
      return {
        ...state,
        createLoading: action.createLoading,
      }
    case DeleteAttachment.DELETE_ATTACHMENT_REQUEST:
      return {
        ...state,
        loading: action.loading,
      }
    case DeleteAttachment.DELETE_ATTACHMENT_SUCCEEDED:
      return {
        ...state,
        loading: action.loading,
        deletedAttachmentId: action.deleteAttachmentId
      }
    case DeleteAttachment.DELETE_ATTACHMENT_FAILED:
      return {
        ...state,
        loading: action.loading,
      }
    default:
      return state
  }
}

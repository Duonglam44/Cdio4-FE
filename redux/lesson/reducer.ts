import { CreateLesson, CreateChapter } from './types'

const initialState = {
  createLoading: null!,
  currentCreatedLessonId: '',
  currentCreatedLessonIds: [],
  currentCreateAttachmentId: '',
}

export const lessonReducer = (state = initialState, action) => {
  switch (action.type) {
    case CreateLesson.CREATE_LESSON_REQUEST:
      return {
        ...state,
        createLoading: action.createLoading,
      }
    case CreateLesson.CREATE_LESSON_SUCCEEDED:
      return {
        ...state,
        createLoading: action.createLoading,
        currentCreatedLessonId: action.currentCreatedLessonId,
        currentCreatedLessonIds: [
          ...state.currentCreatedLessonIds,
          action.currentCreatedLessonId,
        ],
      }
    case CreateLesson.CREATE_LESSON_FAILED:
      return {
        ...state,
        createLoading: action.createLoading,
      }
    case CreateChapter.CREATE_ATTACHMENT_REQUEST:
      return {
        ...state,
        createLoading: action.createLoading,
      }
    case CreateChapter.CREATE_ATTACHMENT_SUCCEEDED:
      return {
        ...state,
        createLoading: action.createLoading,
        currentCreateAttachmentId: action.currentCreateAttachmentId
      }
    case CreateChapter.CREATE_ATTACHMENT_FAILED:
      return {
        ...state,
        createLoading: action.createLoading,
      }
    default:
      return state
  }
}

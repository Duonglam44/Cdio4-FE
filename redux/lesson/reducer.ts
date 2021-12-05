import { CreateLesson } from './types'

const initialState = {
  createLoading: null!,
  currentCreatedLessonIds: [],
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
    default:
      return state
  }
}

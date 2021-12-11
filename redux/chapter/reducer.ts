import { CreateChapter } from './types'

const initialValues = {
  createLoading: null!,
  currentCreateChapterIds: [],
  currentCreateChapterId: '',
}

export const chapterReducer = (state = initialValues, action) => {
  switch (action.type) {
    case CreateChapter.CREATE_CHAPTER_REQUEST:
      return {
        ...state,
        createLoading: action.createLoading,
      }
    case CreateChapter.CREATE_CHAPTER_SUCCEEDED:
      return {
        ...state,
        createLoading: action.createLoading,
        currentCreateChapterId: action.currentCreateChapterId,
        currentCreateChapterIds: [
          ...state.currentCreateChapterIds,
          action.currentCreateChapterId,
        ],
      }
    case CreateChapter.CREATE_CHAPTER_FAILED:
      return {
        ...state,
        createLoading: action.createLoading,
      }
    default:
      return state
  }
}

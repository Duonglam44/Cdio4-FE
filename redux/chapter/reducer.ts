import { CreateChapter, UpdateChapter, DeleteChapter } from './types'

const initialValues = {
  loading: null!,
  currentCreateChapterIds: [],
  currentCreateChapterId: '',
  deletedChapterId: ''
}

export const chapterReducer = (state = initialValues, action) => {
  switch (action.type) {
    case CreateChapter.CREATE_CHAPTER_REQUEST:
      return {
        ...state,
        loading: action.loading,
      }
    case CreateChapter.CREATE_CHAPTER_SUCCEEDED:
      return {
        ...state,
        loading: action.loading,
        currentCreateChapterId: action.currentCreateChapterId,
        currentCreateChapterIds: [
          ...state.currentCreateChapterIds,
          action.currentCreateChapterId,
        ],
      }
    case CreateChapter.CREATE_CHAPTER_FAILED:
      return {
        ...state,
        loading: action.loading,
      }
    // update chapter
    case UpdateChapter.UPDATE_CHAPTER_REQUEST:
      return {
        ...state,
        updateLoading: action.updateLoading,
      }
    case UpdateChapter.UPDATE_CHAPTER_SUCCEEDED:
      return {
        ...state,
        updateLoading: action.updateLoading,
      }
    case UpdateChapter.UPDATE_CHAPTER_FAILED:
      return {
        ...state,
        updateLoading: action.updateLoading,
      }
    // delete chapter
    case DeleteChapter.DELETE_CHAPTER_REQUEST:
      return {
        ...state,
        loading: action.loading,
      }
    case DeleteChapter.DELETE_CHAPTER_SUCCEEDED:
      return {
        ...state,
        loading: action.loading,
        deletedChapterId: action.deletedChapterId
      }
    case DeleteChapter.DELETE_CHAPTER_FAILED:
      return {
        ...state,
        loading: action.loading,
      }
    default:
      return state
  }
}

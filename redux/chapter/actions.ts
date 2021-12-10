import { CreateChapter } from './types'

export const createChapterRequest = () => {
  return {
    type: CreateChapter.CREATE_CHAPTER_REQUEST,
    createLoading: true,
  }
}
export const createChapterSucceeded = (res) => {
  return {
    type: CreateChapter.CREATE_CHAPTER_SUCCEEDED,
    createLoading: false,
    currentCreateChapterId: res
  }
}
export const createChapterFailed = () => {
  return {
    type: CreateChapter.CREATE_CHAPTER_FAILED,
    createLoading: false,
  }
}

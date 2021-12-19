import { CreateChapter, UpdateChapter, DeleteChapter } from './types'

export const createChapterRequest = () => {
  return {
    type: CreateChapter.CREATE_CHAPTER_REQUEST,
    loading: true,
  }
}
export const createChapterSucceeded = (res) => {
  return {
    type: CreateChapter.CREATE_CHAPTER_SUCCEEDED,
    loading: false,
    currentCreateChapterId: res
  }
}
export const createChapterFailed = () => {
  return {
    type: CreateChapter.CREATE_CHAPTER_FAILED,
    loading: false,
  }
}
// update chapter actions

export const updateChapterRequest = () => {
  return {
    type: UpdateChapter.UPDATE_CHAPTER_REQUEST,
    updateLoading: true,
  }
}
export const updateChapterSucceeded = (res) => {
  return {
    type: UpdateChapter.UPDATE_CHAPTER_SUCCEEDED,
    updateLoading: false,
  }
}
export const updateChapterFailed = () => {
  return {
    type: UpdateChapter.UPDATE_CHAPTER_FAILED,
    updateLoading: false,
  }
}
// delete chapter actions
export const deleteChapterRequest = () => {
  return {
    type: DeleteChapter.DELETE_CHAPTER_REQUEST,
    loading: true
  }
}
export const deleteChapterSucceeded = (res: string) => {
  return {
    type: DeleteChapter.DELETE_CHAPTER_SUCCEEDED,
    loading: false,
    deletedChapterId: res
  }
}
export const deleteChapterFailed = () => {
  return {
    type: DeleteChapter.DELETE_CHAPTER_FAILED,
    loading: false
  }
}

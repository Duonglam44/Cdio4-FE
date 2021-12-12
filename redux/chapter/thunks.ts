import {
  createChapterRequest,
  createChapterSucceeded,
  createChapterFailed,
  updateChapterRequest,
  updateChapterSucceeded,
  updateChapterFailed,
  deleteChapterRequest,
  deleteChapterSucceeded,
  deleteChapterFailed
} from './actions'
import { api } from '../../utils/api'

export const createChapter = (params: any) => async (dispatch: any) => {
  dispatch(createChapterRequest())
  const res: any = await api({
    path: '/chapters',
    method: 'POST',
    data: params,
    needThrowError: false,
    errorHandler: (_) => {
      dispatch(createChapterFailed())
    },
  })
  dispatch(createChapterSucceeded(res.data.chapter._id))
}

export const updateChapter = (params: any, chapterId: string) => async (dispatch: any) => {
  dispatch(updateChapterRequest())
  const res: any = await api({
    path: `/chapters/${chapterId}`,
    method: 'PUT',
    data: params,
    needThrowError: false,
    errorHandler: (_) => {
      dispatch(updateChapterFailed())
    },
  })
  dispatch(updateChapterSucceeded(res.data.chapter._id))
}

export const deleteChapter = (id: string) => async (dispatch: any) => {
  dispatch(deleteChapterRequest())
  await api({
    path: `/chapters/${id}`,
    method: 'DELETE',
    needThrowError: false,
    errorHandler: (_) => {
      dispatch(deleteChapterFailed())
    },
  })
  dispatch(deleteChapterSucceeded(id))
}

import {
  createChapterRequest,
  createChapterSucceeded,
  createChapterFailed,
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

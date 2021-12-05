import {
  createLessonRequest,
  createLessonSucceeded,
  createLessonFailed,
} from './actions'
import { api } from '../../utils/api'

export const createLesson = (params: any) => async (dispatch: any) => {
  dispatch(createLessonRequest())
  const res: any = await api({
    path: '/lessons',
    method: 'POST',
    data: params,
    needThrowError: false,
    errorHandler: (_) => {
      dispatch(createLessonFailed())
    },
  })
  dispatch(createLessonSucceeded(res.data.lesson._id))
}

import { createCourseRequest, createCourseSucceeded, createCourseFailed } from './actions'
import { api } from '../../utils/api'

export const createCourse = (params: any) => async (dispatch: any) => {
  dispatch(createCourseRequest())
  const res: any = await api({
    path: '/courses',
    method: 'POST',
    data: params,
    needThrowError: false,
    errorHandler: (_) => {
      dispatch(createCourseFailed())
    },
  })
  dispatch(createCourseSucceeded(res.data.course._id))
}

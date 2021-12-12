import {
  createCourseRequest,
  createCourseSucceeded,
  createCourseFailed,
  getCourseByIdRequest,
  getCourseByIdSucceeded,
  getCourseByIdFailed,
} from './actions'
import { toast } from 'react-toastify'
import { api } from '../../utils/api'

export const createCourse = (params: any) => async (dispatch: any) => {
  dispatch(createCourseRequest())
  const res: any = await api({
    path: '/courses',
    method: 'POST',
    data: params,
    needThrowError: false,
    errorHandler: (res) => {
      toast.error(res)
      dispatch(createCourseFailed())
    },
  })
  toast.success('Create Course Succeeded!')
  dispatch(createCourseSucceeded(res.data.course._id))
}

export const getCourseById = (id: string) => async (dispatch: any) => {
  dispatch(getCourseByIdRequest())
  const res: any = await api({
    path: `/courses/${id}`,
    method: 'GET',
    needThrowError: false,
    errorHandler: (res) => {
      toast.error(res)
      dispatch(getCourseByIdFailed())
    },
  })
  dispatch(getCourseByIdSucceeded(res.data.course))
}

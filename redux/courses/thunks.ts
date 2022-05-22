import {
  createCourseRequest,
  createCourseSucceeded,
  createCourseFailed,
  getCourseByIdRequest,
  getCourseByIdSucceeded,
  getCourseByIdFailed,
  getCoursesRequest,
  getCoursesSucceeded,
  getCoursesFailed,
  getCoursesPaginationRequest,
  getCoursesPaginationSucceeded,
  getCoursesPaginationFailed,
  updateCourseRequest,
  updateCourseSucceeded,
  updateCourseFailed,
  deleteCourseRequest,
  deleteCourseSucceeded,
  deleteCourseFailed
} from './actions'
import { toast } from 'react-toastify'
import { api } from '../../utils/api'

// create course
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

// get course by id
export const getCourseById = (id: string) => async (dispatch: any) => {
  dispatch(getCourseByIdRequest())
  const res: any = await api({
    path: `/courses/auth/${id}`,
    method: 'GET',
    needThrowError: false,
    errorHandler: () => {
      dispatch(getCourseByIdFailed())
    },
  })
  dispatch(getCourseByIdSucceeded(res.data.course))
}

// get courses
export const getCourses = () => async (dispatch: any) => {
  dispatch(getCoursesRequest())
  const res: any = await api({
    path: '/courses/all',
    method: 'GET',
    needThrowError: false,
    errorHandler: (res) => {
      toast.error(res)
      dispatch(getCoursesFailed())
    },
  })
  dispatch(getCoursesSucceeded(res.data.courses, res.data.totalCourses))
}

// get Courses pagination
export const getCoursesPagination = ({ page, limit }) => async (dispatch: any) => {
  dispatch(getCoursesPaginationRequest())
  const res: any = await api({
    path: `/courses/all?page=${page}&count=${limit}`,
    method: 'GET',
    needThrowError: false,
    errorHandler: (res) => {
      toast.error(res)
      dispatch(getCoursesPaginationFailed())
    },
  })
  dispatch(getCoursesPaginationSucceeded(res.data.courses, res.data.totalCourses))
}

// search Courses
export const searchCourses = ({ page, limit }) => async (dispatch: any) => {
  dispatch(getCoursesPaginationRequest())
  const res: any = await api({
    path: `/search/?s=react&page=${page}&count=${limit}`,
    method: 'GET',
    needThrowError: false,
    errorHandler: (res) => {
      toast.error(res)
      dispatch(getCoursesPaginationFailed())
    },
  })
  dispatch(getCoursesPaginationSucceeded(res.data.courses, res.data.totalCourses))
}
// update a course
export const updateCourse = (id: string, params: any, succeededFn: () => void) => async (dispatch: any) => {
  dispatch(updateCourseRequest())
  await api({
    path: `/courses/${id}`,
    method: 'PUT',
    needThrowError: false,
    data: params,
    errorHandler: (res) => {
      toast.error(res)
      dispatch(updateCourseFailed())
    },
  })
  dispatch(updateCourseSucceeded())
  toast.success('Update course successfully!')
  succeededFn()
}

// delete a course
export const deleteCourse = (id: string, succeededFn: () => void) => async (dispatch: any) => {
  dispatch(deleteCourseRequest())
  await api({
    path: `/courses/${id}`,
    method: 'DELETE',
    needThrowError: false,
    errorHandler: (res) => {
      toast.error(res)
      dispatch(deleteCourseFailed())
    },
  })
  dispatch(deleteCourseSucceeded())
  toast.success('Delete course successfully!')
  succeededFn()
}

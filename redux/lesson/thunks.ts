import {
  createLessonRequest,
  createLessonSucceeded,
  createLessonFailed,
  createAttachmentRequest,
  createAttachmentSucceeded,
  createAttachmentFailed,
  updateLessonFailed,
  updateLessonSucceeded,
  updateLessonRequest,
  deleteLessonRequest,
  deleteLessonSucceeded,
  deleteLessonFailed,
  deleteAttachmentRequest,
  deleteAttachmentSucceeded,
  deleteAttachmentFailed,
  getLessonByIdRequest,
  getLessonByIdSucceeded,
  getLessonByIdFailed
} from './actions'
import { api } from '../../utils/api'
import { getCourseById } from '../courses/thunks'

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
  dispatch(createLessonSucceeded(res.data.lesson))
}

export const createChapter = (params: any) => async (dispatch: any) => {
  dispatch(createAttachmentRequest())
  const res: any = await api({
    path: '/attachments',
    method: 'POST',
    data: params,
    needThrowError: false,
    errorHandler: (_) => {
      dispatch(createAttachmentFailed())
    },
  })
  dispatch(createAttachmentSucceeded(res.data.attachment))
}

export const updateLesson =
  (params: any, id: string) => async (dispatch: any) => {
    dispatch(updateLessonRequest())
    await api({
      path: `/lessons/${id}`,
      method: 'PUT',
      data: params,
      needThrowError: false,
      errorHandler: (_) => {
        dispatch(updateLessonFailed())
      },
    })
    dispatch(updateLessonSucceeded())
  }

export const deleteLesson = (id: string) => async (dispatch: any) => {
  dispatch(deleteLessonRequest())
  await api({
    path: `/lessons/${id}`,
    method: 'DELETE',
    needThrowError: false,
    errorHandler: (_) => {
      dispatch(deleteLessonFailed())
    },
  })
  dispatch(deleteLessonSucceeded(id))
}

export const deleteAttachment = (id: string) => async (dispatch: any) => {
  dispatch(deleteAttachmentRequest())
  await api({
    path: `/attachments/${id}`,
    method: 'DELETE',
    needThrowError: false,
    errorHandler: (_) => {
      dispatch(deleteAttachmentFailed())
    },
  })
  dispatch(deleteAttachmentSucceeded(id))
}

export const GetLessonById = (id: string) => async (dispatch: any) => {
  dispatch(getLessonByIdRequest())
  const res: any = await api({
    path: `/lessons/${id}`,
    method: 'get',
    needThrowError: false,
    errorHandler: (_) => {
      dispatch(getLessonByIdFailed())
    },
  })
  Promise.resolve(res)
    .then(async () => {
      await dispatch(getCourseById(res?.data.lesson.chapter?.courseId?._id))
    })
    .finally(() => {
      dispatch(getLessonByIdSucceeded(res?.data.lesson))
    })
}

import {
  getCategoriesRequest,
  getCategoriesSucceeded,
  getCategoriesFailed,
  uploadFileRequest,
  uploadFileSucceeded,
  uploadFileFailed,
} from './actions'
import { api } from '../../utils/api'
import { storage } from '../../firsebase'
import { ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage'

export const getCategories = () => async (dispatch: any) => {
  dispatch(getCategoriesRequest())
  const res: any = await api({
    path: '/course-categories',
    method: 'GET',
    needThrowError: false,
    errorHandler: (error) => {
      dispatch(getCategoriesFailed())
    },
  })
  dispatch(getCategoriesSucceeded(res.data.courseCategories))
}

export const uploadFile =
  (file: any, succeededFunc: (values: string) => void) =>
  async (dispatch: any) => {
    dispatch(uploadFileRequest())
    if (!file) return
    const storageRef = ref(storage, `/files/${file.name}`)

    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )
      },
      (err) => {
        dispatch(uploadFileFailed())
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url: string) => {
          succeededFunc(url)
          dispatch(uploadFileSucceeded(url))
        })
      }
    )
  }

import { GetCategories, UploadFile } from './types'

export const getCategoriesRequest = () => {
  return {
    type: GetCategories.GET_CATEGORIES_REQUEST,
    loading: true
  }
}

export const getCategoriesSucceeded = (res: any) => {
  return {
    type: GetCategories.GET_CATEGORIES_SUCCEEDED,
    loading: false,
    categories: res
  }
}

export const getCategoriesFailed = () => {
  return {
    type: GetCategories.GET_CATEGORIES_FAILED,
    loading: false
  }
}

export const uploadFileRequest = () => {
  return {
    type: UploadFile.UPLOAD_REQUEST,
    uploadLoading: true
  }
}
export const uploadFileSucceeded = (res) => {
  return {
    type: UploadFile.UPLOAD_SUCCEEDED,
    uploadLoading: false,
    uploadedUrl: res
  }
}
export const uploadFileFailed = () => {
  return {
    type: UploadFile.UPLOAD_FAILED,
    uploadLoading: false
  }
}

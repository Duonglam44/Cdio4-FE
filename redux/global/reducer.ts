import { GetCategories, UploadFile } from './types'
import { convertArrayObjectToObject } from '../../helpers/Convert_Array_To_Object'

const initialState = {
  categories: [],
  loading: null!,
  uploadLoading: null!,
  uploadedUrl: '',
}

export const globalReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GetCategories.GET_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: action.loading,
      }
    case GetCategories.GET_CATEGORIES_SUCCEEDED:
      return {
        ...state,
        loading: action.loading,
        categories: convertArrayObjectToObject(action.categories, '_id'),
      }
    case GetCategories.GET_CATEGORIES_FAILED:
      return {
        ...state,
        loading: action.loading,
      }
    case UploadFile.UPLOAD_REQUEST:
      return {
        ...state,
        uploadLoading: action.uploadLoading,
      }
    case UploadFile.UPLOAD_SUCCEEDED:
      return {
        ...state,
        uploadLoading: action.uploadLoading,
        uploadedUrl: action.uploadedUrl,
      }
    case UploadFile.UPLOAD_FAILED:
      return {
        ...state,
        uploadLoading: action.uploadLoading,
      }
    default:
      return state
  }
}

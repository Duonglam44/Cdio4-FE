import { GetCategories } from './types'

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

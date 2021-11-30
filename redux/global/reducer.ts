import { GetCategories } from './types'

const initialState = {
  categories: [],
  loading: null!
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
        categories: action.categories
      }
    case GetCategories.GET_CATEGORIES_FAILED:
      return {
        ...state,
        loading: action.loading,
      }
    default:
      return state
  }
}

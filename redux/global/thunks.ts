import {
  getCategoriesRequest,
  getCategoriesSucceeded,
  getCategoriesFailed,
} from './actions'
import { api } from '../../utils/api'

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

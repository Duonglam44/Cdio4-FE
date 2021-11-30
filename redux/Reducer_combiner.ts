// all reducers no need to export with default option
import { combineReducers } from 'redux'
import { userInfo } from './login/reducers'
import { globalReducer } from './global/reducer'

const rootReducer = combineReducers({
  userInfo,
  globalReducer
})

export default rootReducer
// type of combine reducer
export type RootState = ReturnType<typeof rootReducer>

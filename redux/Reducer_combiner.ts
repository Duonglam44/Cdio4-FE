// all reducers no need to export with default option
import { combineReducers } from 'redux'
import { auth } from './login/reducers'
import { globalReducer } from './global/reducer'
import { courseReducer } from './courses/reducer'
import { lessonReducer } from './lesson/reducer'
import { chapterReducer } from './chapter/reducer'
import { user } from './user/reducer'

const rootReducer = combineReducers({
  auth,
  user,
  globalReducer,
  courseReducer,
  lessonReducer,
  chapterReducer
})

export default rootReducer
// type of combine reducer
export type RootState = ReturnType<typeof rootReducer>

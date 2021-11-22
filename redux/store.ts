import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './Reducer_combiner'
/**
 * @param {object} initialState
 */
export const makeStore = (initialState: any) => {

  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))
}

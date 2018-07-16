import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import throttle from 'lodash/throttle'

import { loadState, saveState } from './../utils/localStorage'
import rootReducer from './rootReducer'

const persistedState = loadState()
const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(thunk)
)

store.subscribe(throttle(() => {
  console.debug('saveState')
  saveState(store.getState())
}, 1000))

export default store

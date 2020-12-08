import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootSaga from './rootSagas'
import rootReducer, { IRootState } from './rootReducer'

const sagaMiddleware = createSagaMiddleware()

const store = createStore<IRootState, any, any, any>(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store

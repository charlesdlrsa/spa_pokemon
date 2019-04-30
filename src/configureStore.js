import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import {drawerReducer} from './reducer.js'

export default function configureStore(initialState={idPokemonChosen: null}) {
  const sagaMiddleware = createSagaMiddleware()
  return {
    ...createStore(drawerReducer, initialState, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run
  }
}

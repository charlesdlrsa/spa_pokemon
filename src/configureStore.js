import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import {drawerReducer} from './reducer.js'

const defaultState = {
  pokemonIds: Array(5).fill(1).map((x, y) => x + y),
  idPokemonChosen: null,
  pokemons: Array(5).fill(null),
}

export default function configureStore(initialState = defaultState) {
  const sagaMiddleware = createSagaMiddleware()
  return {
    ...createStore(drawerReducer, initialState, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run
  }
}

import { call, put, takeEvery } from 'redux-saga/effects'
import {fetchPokemon} from "./Api.js"
import {FETCH_FAILED, FETCH_REQUESTED, FETCH_SUCCEEDED} from './actions.js'

// Our worker Saga
function* fetchData(action) {
   try {
      const data = yield call(fetchPokemon, action.idPokemonChosen)
      yield put({type: FETCH_SUCCEEDED, data})
   } catch (error) {
      yield put({type: FETCH_FAILED, error})
   }
}

// Our watcher Saga
export default function* watchFetchData() {
  yield takeEvery(FETCH_REQUESTED, fetchData)
}

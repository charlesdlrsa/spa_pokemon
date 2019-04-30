import React from "react"
import {Provider} from 'react-redux'
import {Container} from "./App.wrap.js"
import configureStore from './configureStore.js'
import rootSaga from './sagas.js'

const store = configureStore()
store.runSaga(rootSaga)

export default class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    )
  };
};

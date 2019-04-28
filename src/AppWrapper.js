import React from "react"
import {Provider} from 'react-redux'
import {Container} from "./App.wrap.js"
import {store} from "./reducer.js"

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    )
  };
};

export default AppWrapper

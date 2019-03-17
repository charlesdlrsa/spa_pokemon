import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pokemon from './Pokemon/Pokemon';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemonIds: [...Array(10).keys()],
    }
  }

  render() {
    return(
      <div className="App">
        <Pokemon id="1"/>
        <Pokemon id="2"/>
        <Pokemon id="3"/>
        <Pokemon id="4"/>
        <Pokemon id="5"/>
        <Pokemon id="6"/>
        <Pokemon id="7"/>
        <Pokemon id="8"/>
        <Pokemon id="9"/>
      </div>
    )
  }
}

export default App;

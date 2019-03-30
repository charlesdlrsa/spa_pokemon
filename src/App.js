import React, { Component } from 'react';
import { Pokemon } from './Pokemon/Pokemon.js';
import { AppBox } from './App_style.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemonIds: Array(9).fill(1).map((x, y) => x + y),
    }
  }

  render() {
    const pokemons = this.state.pokemonIds.map(id => <Pokemon key={id} id={id}/>)
    return(
      <AppBox>
        {pokemons}
      </AppBox>
    )
  }
}

export default App;

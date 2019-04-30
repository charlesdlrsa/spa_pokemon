import React from 'react';
import Pokemon from './Pokemon/Pokemon.js';
import {AppBox} from './App.style.js';
import Drawer from '@material-ui/core/Drawer'

export default class App extends React.Component {
  state = {
      pokemonIds: Array(31).fill(1).map((x, y) => x + y),
  }

  render() {
    const pokemons = this.state.pokemonIds.map(id => <Pokemon key={id} id={id} onClick={()=>this.props.showPokemon(id)}/>)
    return(
      <div>
      <AppBox>
        {pokemons}
      </AppBox>
      <Drawer open={this.props.idPokemonChosen!=null} onClose={this.props.hidePokemon}>
        <div tabIndex={0} role="button" onClick={this.props.hidePokemon} onKeyDown={this.props.hidePokemon}>
          <Pokemon key={this.props.idPokemonChosen} id={this.props.idPokemonChosen}/>
        </div>
      </Drawer>
      </div>
    )
  }
}

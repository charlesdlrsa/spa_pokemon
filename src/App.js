import React, {Component} from 'react';
import Pokemon from './Pokemon/Pokemon.js';
import {AppBox} from './App.style.js';
import Drawer from '@material-ui/core/Drawer'

class App extends Component {
  state = {
      pokemonIds: Array(31).fill(1).map((x, y) => x + y),
  }

  openDrawer = id => {
    this.props.showPokemon(id)
  }

  closeDrawer = () => {
    this.props.hidePokemon()
  }

  render() {
    const pokemons = this.state.pokemonIds.map(id => <Pokemon key={id} id={id} onClick={()=>this.openDrawer(id)}/>)
    return(
      <div>
      <AppBox>
        {pokemons}
      </AppBox>
      <Drawer open={this.props.drawer} onClose={this.closeDrawer}>
        <div tabIndex={0} role="button" onClick={this.closeDrawer} onKeyDown={this.closeDrawer}>
          <Pokemon key={this.props.idPokemonChosen} id={this.props.idPokemonChosen}/>
        </div>
      </Drawer>
      </div>
    )
  }
}

export default App

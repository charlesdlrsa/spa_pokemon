import React, { Component } from 'react';
import Pokemon from './Pokemon/Pokemon.js';
import { AppBox } from './App_style.js';
import Drawer from '@material-ui/core/Drawer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemonIds: Array(31).fill(1).map((x, y) => x + y),
      drawer: false,
      idPokemonChosen: null,
    }
  }

  openDrawer = id => {
    this.setState({
      drawer: true,
      idPokemonChosen: id
    })
  }

  closeDrawer = () => {
    this.setState({
      drawer: false,
      idPokemonChosen: null
    })
  }

  render() {
    const pokemons = this.state.pokemonIds.map(id => <Pokemon key={id} id={id} onClick={()=>this.openDrawer(id)}/>)
    return(
      <div>
      <AppBox>
        {pokemons}
      </AppBox>
      <Drawer open={this.state.drawer} onClose={this.closeDrawer}>
        <div tabIndex={0} role="button" onClick={this.closeDrawer} onKeyDown={this.closeDrawer}>
          <Pokemon key={this.state.idPokemonChosen} id={this.state.idPokemonChosen}/>
        </div>
      </Drawer>
      </div>
    )
  }
}

export default App;

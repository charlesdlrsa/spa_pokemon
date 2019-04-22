import React, { Component } from 'react';
import Pokemon from './Pokemon/Pokemon.js';
import { AppBox } from './App_style.js';
import Drawer from '@material-ui/core/Drawer'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'


// Redux :
const OPEN = "OPEN";
const CLOSE = "CLOSE";

const openDrawer = (id) => {
  return {
    type: OPEN,
    id,
  }
};

const closeDrawer = () => {
  return {
    type: CLOSE,
  }
};

const drawerReducer = (state={drawer: false, idPokemonChosen: null}, action) => {
  switch (action.type) {
    case OPEN:
      return {drawer: true, idPokemonChosen: action.id}
    case CLOSE:
      return {drawer: false, idPokemonChosen: null}
    default:
      return state
  };
};

const store = createStore(drawerReducer);

// React :
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemonIds: Array(31).fill(1).map((x, y) => x + y),
    }
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

// Redux - react
const mapStateToProps = (state) => {
  return {drawer: state.drawer, idPokemonChosen: state.idPokemonChosen}
};

const mapDispatchToProps = (dispatch) => {
  return {
    showPokemon: (id) => {
      dispatch(openDrawer(id))
    },
    hidePokemon: () => {
      dispatch(closeDrawer())
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    )
  };
};

export default AppWrapper;

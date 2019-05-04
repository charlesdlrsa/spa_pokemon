// Higher Order Component
import App from "./App.js"
import { connect } from 'react-redux'
import {openDrawer, closeDrawer, callApiPokemon} from './actions.js'

const mapStateToProps = (state) => {
  return {
    pokemonIds: state.pokemonIds,
    idPokemonChosen: state.idPokemonChosen,
    pokemons: state.pokemons
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    showPokemon: (id) => {
      dispatch(openDrawer(id))
    },
    hidePokemon: () => {
      dispatch(closeDrawer())
    },
    fetchPokemon: (id) => {
      dispatch(callApiPokemon(id))
    },
  }
};

export const Container = connect(mapStateToProps, mapDispatchToProps)(App);

// Higher Order Component
import App from "./App.js"
import { connect } from 'react-redux'
import {openDrawer, closeDrawer} from './actions.js'

const mapStateToProps = (state) => {
  return {idPokemonChosen: state.idPokemonChosen}
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

export const Container = connect(mapStateToProps, mapDispatchToProps)(App);

import { createStore } from 'redux'
import {OPEN, CLOSE} from './actions.js'

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

export const store = createStore(drawerReducer);

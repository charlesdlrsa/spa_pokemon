import {OPEN, CLOSE, FETCH_SUCCEEDED} from './actions.js'

export const drawerReducer = (state={idPokemonChosen: null}, action) => {
  switch (action.type) {
    case OPEN:
      return {idPokemonChosen: action.id}
    case CLOSE:
      return {idPokemonChosen: null}
    case FETCH_SUCCEEDED:
      return null
    default:
      return state
  };
};

import {OPEN, CLOSE, FETCH_SUCCEEDED, FETCH_FAILED} from './actions.js'

export const drawerReducer = (state, action) => {
  switch (action.type) {
    case OPEN:
      return {...state, idPokemonChosen: action.id}
    case CLOSE:
      return {...state, idPokemonChosen: null}
    case FETCH_SUCCEEDED:
      const pokemons = state.pokemons
      pokemons[action.pokemon.id-1] = action.pokemon
      return {...state, pokemons: pokemons}
    case FETCH_FAILED:
      return {...state, error: action.error}
    default:
      return state
  };
};

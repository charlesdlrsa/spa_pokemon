import { getFirstAbility, convertPoundsToKilograms } from './Pokemon/Pokemon.service.js';

export function fetchPokemon(idPokemon){
  fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`, {
    method: 'GET',
  })
  .then(response => response.json())
  .then((pokemon) => ({
    name: pokemon.name,
    picFront: pokemon.sprites.front_default,
    firstAbility: getFirstAbility(pokemon),
    weight: convertPoundsToKilograms(pokemon),
    })
  )
  .catch((error) => {
    console.error(error);
  })
}

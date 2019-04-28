export function getFirstAbility(pokemon) {
  return (pokemon.abilities !== [] ? pokemon.abilities[0].ability.name : null)
}

export function convertPoundsToKilograms(pokemon) {
  return (Math.round(pokemon.weight*0.453592))
}

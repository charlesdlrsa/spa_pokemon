import React from 'react';
import { PokemonBox } from './Pokemon.style.js';

export default class Pokemon extends React.Component {

  componentWillMount() {
    if (this.props.pokemons[this.props.id-1] == null) {
      this.props.fetchPokemon(this.props.id)
    }
  }

  render() {
    console.log(this.props.pokemons)
    const pokemon = this.props.pokemons[this.props.id-1]
    return(
        <PokemonBox onClick={this.props.onClick}>
          <h1 style={{textTransform: 'capitalize'}}> {pokemon.name} </h1>
          <img alt={pokemon.name} src={pokemon.picFront} width="150px"/>
          <p> Attack: {pokemon.firstAbility} </p>
          <p> Weight: {pokemon.weight} kg</p>
        </PokemonBox>
    )
  }
}

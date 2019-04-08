import React, { Component } from 'react';
import { getFirstAbility, convertPoundsToKilograms } from './Pokemon_service.js';
import { PokemonBox } from './Pokemon_style.js';
import Avatar from '@material-ui/core/Avatar';

export class Pokemon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      name: '',
      picFront: null,
      firstAbility: '',
      weight: null,
    }
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/' + this.props.id, {
      method: 'GET',
    })
    .then(response => response.json())
    .then((pokemon) => {
      this.setState({
        isLoading: false,
        name: pokemon.name,
        picFront: pokemon.sprites.front_default,
        firstAbility: getFirstAbility(pokemon),
        weight: convertPoundsToKilograms(pokemon),
      })
    })
    .catch((error) => {
      console.error(error);
    })
  }

  render() {
    if(this.state.isLoading) {
      return null
    }
    return(
        <PokemonBox onClick={this.props.onClick}>
        <h1> {this.state.name[0].toUpperCase() + this.state.name.slice(1)} </h1>
        <img alt={this.state.name} src={this.state.picFront} width="150px"/>
        <p> Attack: {this.state.firstAbility} </p>
        <p> Weight: {this.state.weight} kg</p>
        </PokemonBox>
    )
  }
}

export default Pokemon;

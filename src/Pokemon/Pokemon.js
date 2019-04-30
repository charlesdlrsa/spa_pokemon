import React from 'react';
import { getFirstAbility, convertPoundsToKilograms } from './Pokemon.service.js';
import { PokemonBox } from './Pokemon.style.js';

export default class Pokemon extends React.Component {
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
          <h1 style={{textTransform: 'capitalize'}}> {this.state.name} </h1>
          <img alt={this.state.name} src={this.state.picFront} width="150px"/>
          <p> Attack: {this.state.firstAbility} </p>
          <p> Weight: {this.state.weight} kg</p>
        </PokemonBox>
    )
  }
}

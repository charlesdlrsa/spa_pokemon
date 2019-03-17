import React, { Component } from 'react';
import '../App.css';

class Pokemon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      name: "",
      firstAbility: "",
      weight: "",
    }
  }

  componentDidMount(){
    this.getPokemon()
  }

  getPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon/' + this.props.id, {
      method: 'GET',
    })
    .then(response => response.json())
    .then((data) => {
      this.setState({
        isLoading: false,
        name: data.name,
        picFront: data.sprites.front_default,
        firstAbility: data.abilities[0].ability.name,
        weight: data.weight,
      })
    })
    .catch((error) => {
      console.error(error);
    })
  }

  render() {
    if(this.state.isLoading){
      return(
        <div></div>
      )
    }
    else{
      return(
        <div className="App">
        <div> Name: {this.state.name} </div>
        <img alt={this.state.name} src={this.state.picFront} width="200px"/>
        <div> First ability: {this.state.firstAbility} </div>
        <div> Weight: {this.state.weight/10} kg</div>
        </div>
      )
    }
  }
}

export default Pokemon;

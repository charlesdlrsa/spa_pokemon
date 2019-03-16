import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state = {
      isLoading:true,
      name: "",
      firstAbility: "",
      weight: "",
    }
  }

  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur', {
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
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
    // );
    if(this.state.isLoading){
    }
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

export default App;

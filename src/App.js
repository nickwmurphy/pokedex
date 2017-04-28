import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';

const api = 'http://pokeapi.co/api/v2/pokemon';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backSprite: "",
      frontSprite: "",
      name: "",
      type: ""
    };
  }

  displayResult(data) {
    this.setState({
      backSprite: data.sprites.back_default,
      frontSprite: data.sprites.front_default,
      name: data.name,
      type: data.types[0].type.name
    });
  }

  search(num) {
    Axios.get(`${api}/${num}/`)
      .then(response => {
        console.log(response.data);
        this.displayResult(response.data);
      })
      .catch(error => console.log(error));
  };

  updateInputValue = e => {
    let input = e.target.value;
    if (input > 0 && input < 152) {
      this.search(input);
    }
  };

  render() {
    return (
      <div>
        <span>Search a Pokemon by number (1 to 151 only):</span>
        <br/>
        <input type="number" onChange={this.updateInputValue}/>
        <br/><br/>
        <span>Name: <strong>{this.state.name}</strong></span>
        <br/><br/>
        <span>Type: <strong>{this.state.type}</strong></span>
        <br/><br/>
        <img width="200px" alt="" src={this.state.frontSprite}/>
        <img width="200px" alt="" src={this.state.backSprite}/>
      </div>
    );
  }
}

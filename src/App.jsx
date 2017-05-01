import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import Loader from './Loader.jsx';
import Card from './Card.jsx';
import Input from './Input.jsx';

const api = 'http://pokeapi.co/api/v2/pokemon';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 'isNotLoading'
    };
  }

  displayResult(data) {
    this.setState({
      backSprite: data.sprites.back_default,
      frontSprite: data.sprites.front_default,
      name: data.name,
      type: data.types[0].type.name,
      loading: 'isNotLoading'
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

  render() {
    return (
      <div>
        <Input input='' />
        <Card isReady={!this.state.loading}
              name={this.state.name}
              type={this.state.type}
              frontSprite={this.state.frontSprite}
              backSprite={this.state.backSprite}
        />
      <Loader isLoading={this.state.loading} />
      </div>
    );
  }
}

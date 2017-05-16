import React, { Component } from 'react';
import Axios from 'axios';

import Card from './Card.jsx';
import Loader from './Loader.jsx';
import Search from './Search.jsx';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  };

  displayResult = data => {
    this.setState({
      backSprite: data.sprites.back_default,
      frontSprite: data.sprites.front_default,
      name: data.name,
      type: data.types[0].type.name,
      loading: ''
    });
  };

  search = input => {
    const api = 'https://pokeapi.co/api/v2/pokemon';
    Axios.get(`${api}/${input}/`)
      .then(response => {
        this.displayResult(response.data);
      })
      .catch(error => console.log(error));
  };

  updateInputValue = e => {
    this.setState({
      backSprite: '',
      frontSprite: '',
      name: '',
      type: '',
      loading: 'isLoading'
    });
    let input = e.target.value.toLowerCase();
    this.search(input);
  };

  render() {

    const card = this.state.loading === ''
      ? (<Card
          name={this.state.name}
          type={this.state.type}
          frontSprite={this.state.frontSprite}
          backSprite={this.state.backSprite}
        />)
      : null;

    const input = (<Search
      updateInputValue={this.updateInputValue}
    />);

    const loader = (<Loader
      isLoading={this.state.loading}
    />);

    return (
      <div className='container'>
        {input}
        {card}
        {loader}
      </div>
    );
  }
}

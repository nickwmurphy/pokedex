import React, { Component } from 'react';
import Axios from 'axios';
import _ from 'lodash';

import Card from './Card';
import Search from './Search';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { pokemon: null };
  }

  search = (input) => {
    const API = 'https://pokeapi.co/api/v2/pokemon';
    Axios.get(`${API}/${input}/`)
      .then((response) => {
        this.setState({ pokemon: response.data });
      })
      .catch(error => console.log(error)); // eslint-disable-line
  };

  render() {
    const updateInputValue = _.debounce(input => this.search(input), 300);
    const card = <Card pokemon={this.state.pokemon} />;
    const search = (<Search updateInputValue={updateInputValue} />);

    return (
      <div className='container'>
        {search}
        {card}
      </div>
    );
  }
}

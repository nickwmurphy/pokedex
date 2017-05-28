import React, { Component } from 'react';
import Axios from 'axios';
import _ from 'lodash';
import Card from './Card';
import Search from './Search';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      badInput: false,
      hasInput: false,
      isLoading: false,
      pokemon: null
    };
  }

  search = (input) => {
    this.setState({ isLoading: true });

    const API = 'https://pokeapi.co/api/v2/pokemon';
    const hasInput = input !== '';
    const badInput = hasInput && (input < 1 || input > 721);

    if (hasInput && !badInput) {
      Axios.get(`${API}/${input}/`)
        .then((response) => {
          const pokemon = response.data;
          this.setState({ badInput, hasInput, isLoading: false, pokemon });
        });
    } else {
      this.setState({ badInput, hasInput, isLoading: false });
    }
  };

  render() {
    const updateInputValue = _.debounce(input => this.search(input), 300);

    const card = (<Card
      hasInput={this.state.hasInput}
      isLoading={this.state.isLoading}
      pokemon={this.state.pokemon}
    />);
    const search = (<Search
      badInput={this.state.badInput}
      updateInputValue={updateInputValue}
    />);

    return (
      <div className='container'>
        {search}
        {card}
      </div>
    );
  }
}

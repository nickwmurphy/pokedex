import React, { Component } from 'react';
import Axios from 'axios';
import _ from 'lodash';
import Card from './Card';
import SearchBar from './SearchBar';
import './App.css';

const API = 'https://pokeapi.co/api/v2/pokemon';

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

    const hasInput = input !== '';
    const badInput = hasInput && (input < 1 || input > 721);

    if (hasInput && !badInput) {
      Axios.get(`${API}/${input}/`)
        .then((response) => {
          const pokemon = response.data;
          this.setState({ badInput, hasInput, isLoading: false, pokemon });
        });
    } else {
      this.setState({ badInput, hasInput, isLoading: false, pokemon: null });
    }
  };

  render() {
    const search = _.debounce(input => this.search(input), 1000);

    const card = (<Card
      hasInput={this.state.hasInput}
      isLoading={this.state.isLoading}
      pokemon={this.state.pokemon}
    />);

    const searchBar = (<SearchBar
      badInput={this.state.badInput}
      search={search}
    />);

    return (
      <div className='container'>
        {searchBar}
        {card}
      </div>
    );
  }
}

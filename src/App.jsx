import React, { Component } from 'react';
import Axios from 'axios';

import Card from './Card.jsx';
import Loader from './Loader.jsx';
import Search from './Search.jsx';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.updateInputValue = this.debounce(this.updateInputValue, 750);
    this.state = { };
  };

  debounce = (func, wait, immediate) => {
    let timeout;
    return function() {
      let context = this, args = arguments;
      let later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  delayedUpdateInputValue = e => {
    e.persist();
    this.updateInputValue(e);
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
    let input = e.target.value.toLowerCase();
    if (input && input > 0 && input <= 721) {
      this.search(input);
      this.setState({
        backSprite: '',
        frontSprite: '',
        name: '',
        type: '',
        loading: 'isLoading'
      });
    }
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
      updateInputValue={this.delayedUpdateInputValue}
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

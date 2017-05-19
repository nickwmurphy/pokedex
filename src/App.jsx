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
    this.state = {
      backSprite: '',
      badInput: false,
      frontSprite: '',
      hasInput: false,
      inputValue: '',
      loading: false,
      name: '',
      type: ''
    };
  };

  clearInput = () => {
    this.setState({
      inputValue: '',
      hasInput: false
    });
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
      loading: false,
      name: data.name,
      type: data.types[0].type.name
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
    e.preventDefault();
    let input = e.target.value;
    if (input) {
     if (input > 0 && input <= 721) {
        this.setState({
          backSprite: '',
          badInput: false,
          frontSprite: '',
          hasInput: true,
          inputValue: input,
          loading: true,
          name: '',
          type: ''
       });
        this.search(input);
      } else {
        this.setState({
          badInput: true,
          hasInput: true,
          inputValue: input
        });
      }
    } else {
      this.setState({ hasInput: false, inputValue: '' });
    }
  };

  render() {
    const card = (this.state.hasInput && !this.state.badInput && !this.state.loading)
      ? (<Card
          backSprite={this.state.backSprite}
          frontSprite={this.state.frontSprite}
          name={this.state.name}
          type={this.state.type}
        />)
      : null;
    const search = (<Search
      badInput={this.state.badInput}
      clearInput={this.clearInput}
      hasInput={this.state.hasInput}
      updateInputValue={this.delayedUpdateInputValue}
      inputValue={this.state.inputValue}
    />);
    const loader = (<Loader
      loading={this.state.loading}
    />);

    return (
      <div className='container'>
        {search}
        {card}
        {loader}
      </div>
    );
  }
}

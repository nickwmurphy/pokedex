import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import Loader from './Loader.jsx';
import Card from './Card.jsx';

const api = 'http://pokeapi.co/api/v2/pokemon';

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

    const input = (<div className='container'>
      Search a Pokemon by name or number:
      <input className='input' type="text" onChange={this.updateInputValue}/>
      </div>
    );

    const loader = (<Loader
      isLoading={this.state.loading}
    />);

    return (
      <div>
        {input}
        {card}
        {loader}
      </div>
    );
  }
}

import React, { Component } from 'react';
import './App.css';

export default class Input extends Component {

  updateInputValue = e => {
    //this.setState({ loading: 'isLoading' });
    let input = e.target.value;
    // this.search(input.toLowerCase());
    this.props.input = input;
  };

  render() {
    return (
      <div>
        <span>Search a Pokemon by name or number (1 to 151 only):</span>
        <br/><br/>
        <input type="text" onChange={this.updateInputValue}/>
        <br/><br/>
      </div>
    );
  }
}

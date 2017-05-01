import React, { Component } from 'react';
import './App.css';

export default class Card extends Component {

  render() {
    return (
      <div>
        <span>Name: <strong>{this.props.name}</strong></span>
        <br/><br/>
        <span>Type: <strong>{this.props.type}</strong></span>
        <br/><br/>
        <img width="200px" alt="" src={this.props.frontSprite}/>
        <img width="200px" alt="" src={this.props.backSprite}/>
        <br/><br/>
      </div>
    );
  }
}

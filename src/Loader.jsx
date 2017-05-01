import React, { Component } from 'react';
import './App.css';

export default class Loader extends Component {

  render() {
    return (
      <div className={this.props.isLoading}></div>
    );
  }
}

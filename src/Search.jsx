import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = { input: '' };
  }

  clearInput = () => {
    this.setState({ input: '' });
    this.props.updateInputValue('');
  }

  updateInputValue = (e) => {
    const input = e.target.value;
    this.setState({ input });
    this.props.updateInputValue(input);
  };

  render() {
    const clear = this.state.input
      ? <button className='clear' onClick={this.clearInput}>Clear</button>
      : null;

    const error = this.props.badInput
      ? <span className='error'>Search a number 1 to 721</span>
      : null;

    return (
      <div className='search'>
        <span>Search a Pokemon by number:</span>
        <div>
          <input
            className='input'
            onChange={this.updateInputValue}
            pattern='[0-9]*'
            type='number'
            value={this.state.input}
          />
          {clear}
        </div>
        {error}
      </div>
    );
  }
}

Search.propTypes = {
  badInput: PropTypes.bool.isRequired,
  updateInputValue: PropTypes.func.isRequired
};

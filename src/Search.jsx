import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = { inputValue: '' };
  }

  clearInput = () => this.setState({ inputValue: '' });

  updateInputValue = (e) => {
    const inputValue = e.target.value;

    this.setState({ inputValue });

    if (inputValue > 0 && inputValue <= 721) {
      this.props.updateInputValue(inputValue);
    }
  };

  render() {
    const clear = this.state.inputValue
      ? <button className='clear' onClick={this.clearInput}>Clear</button>
      : null;

    const error = (this.state.inputValue < 0 || this.state.inputValue > 721)
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
            value={this.state.inputValue}
          />
          {clear}
        </div>
        {error}
      </div>
    );
  }
}

Search.propTypes = { updateInputValue: PropTypes.func.isRequired };

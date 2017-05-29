import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { input: '' };
  }

  clearInput = () => {
    this.setState({ input: '' });
    this.props.search('');
  }

  search = (e) => {
    const input = e.target.value;
    this.setState({ input });
    this.props.search(input);
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
            autoFocus
            className='input'
            onChange={this.search}
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

SearchBar.propTypes = {
  badInput: PropTypes.bool.isRequired,
  search: PropTypes.func.isRequired
};

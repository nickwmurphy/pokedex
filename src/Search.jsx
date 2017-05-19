import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Search = ({
  badInput,
  hasInput,
  updateInputValue
}) => {

  const error = (hasInput && badInput)
    ? <span className='error'>Search a number 1 to 721</span>
    : null;

  return (
    <div className='search'>
      <span>Search a Pokemon by number:</span>
      <div>
        <input className='input'
          onChange={updateInputValue}
          pattern='[0-9]*'
          type='number'
          />
      </div>
      {error}
    </div>
  );
};

Search.propTypes = {
  badInput: PropTypes.bool.isRequired,
  hasInput: PropTypes.bool.isRequired,
  updateInputValue: PropTypes.func.isRequired
};

Search.defaultProps = { };

export default Search;

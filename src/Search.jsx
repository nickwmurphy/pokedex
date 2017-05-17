import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Search = ({
  input,
  updateInputValue
}) => {

  const error = (input && (input < 1 || input > 721))
    ? <span className='error'>Search a number 1 to 721</span>
    : null;

  return (
    <div className='search'>
      <span>Search a Pokemon by number:</span>
      <input className='input' type='number' pattern='[0-9]*' onChange={updateInputValue}/>
      {error}
    </div>
  );
};

Search.propTypes = {
  updateInputValue: PropTypes.func.isRequired
};

Search.defaultProps = { };

export default Search;

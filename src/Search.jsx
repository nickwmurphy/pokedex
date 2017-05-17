import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Search = ({
  updateInputValue
}) => {

  return (
    <div className='search'>
      <span>Search a Pokemon by number:</span>
      <input className='input' type='number' pattern='[0-9]*' onChange={updateInputValue}/>
    </div>
  );
};

Search.propTypes = {
  updateInputValue: PropTypes.func.isRequired
};

Search.defaultProps = { };

export default Search;

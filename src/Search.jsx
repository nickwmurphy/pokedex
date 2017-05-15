import React, { PropTypes } from 'react';
import './App.css';

const Search = ({
  updateInputValue
}) => {

  return (
    <div className='search'>
      <span>Search a Pokemon by name or number:</span>
      <input className='input' type='text' onChange={updateInputValue}/>
    </div>
  );
};

Search.propTypes = {
  updateInputValue: PropTypes.func.isRequired
};

Search.defaultProps = { };

export default Search;

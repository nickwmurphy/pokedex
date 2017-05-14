import React, { PropTypes } from 'react';
import './App.css';

const Loader = ({
  isLoading
}) => {

  return (
    <div className={isLoading}></div>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.string
};

Loader.defaultProps = {
  isLoading: ''
};

export default Loader;

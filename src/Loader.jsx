import React from 'react';
import PropTypes from 'prop-types';
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

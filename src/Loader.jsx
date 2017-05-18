import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Loader = ({
  loading
}) => {

  const spinner = loading
    ? <div className='spinner'></div>
    : null;

  return (
    <div>
      {spinner}
    </div>
  );
}

Loader.propTypes = {
  loading: PropTypes.bool.isRequired
};

Loader.defaultProps = { };

export default Loader;

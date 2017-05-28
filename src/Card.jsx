import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Card = ({
  hasInput,
  isLoading,
  pokemon
}) => {
  if (!hasInput || !pokemon) return <div>No Results</div>;

  if (isLoading) return <div className='spinner' />;

  const back = <img width='150px' alt='' src={pokemon.sprites.back_default} />;

  const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

  const front = <img width='150px' alt='' src={pokemon.sprites.front_default} />;

  const label = (<div className='label'>
    {`${capitalize(pokemon.name)} - ${capitalize(pokemon.types[0].type.name)}`}
  </div>);

  return (
    <div className='card'>
      {label}
      <div className='sprites'>
        {front}
        {back}
      </div>
    </div>
  );
};

Card.propTypes = {
  hasInput: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  pokemon: PropTypes.shape()
};

Card.defaultProps = { pokemon: null };

export default Card;

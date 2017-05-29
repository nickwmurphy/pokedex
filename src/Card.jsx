import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Card = ({
  hasInput,
  isLoading,
  pokemon
}) => {
  if ((!hasInput || !pokemon) && !isLoading) return <div>No Results</div>;

  if (isLoading) return <div className='spinner' />;

  const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

  const name = capitalize(pokemon.name);
  const type = capitalize(pokemon.types[0].type.name);
  const frontSprite = pokemon.sprites.front_default;
  const backSprite = pokemon.sprites.back_default;

  const label = <div className='label'>{`${name} - ${type}`}</div>;

  const sprites = (<div className='sprites'>
    <img alt='' src={frontSprite} width='150px' />
    <img alt='' src={backSprite} width='150px' />
  </div>);

  return (
    <div className='card'>
      {label}
      {sprites}
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

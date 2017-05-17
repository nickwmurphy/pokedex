import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Card = ({
  name,
  type,
  frontSprite,
  backSprite
}) => {

  const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

  const _name = (<div className='name'>
      <strong>{`${capitalize(name)} - ${capitalize(type)}`}</strong>
    </div>);

  const front = <img width='150px' alt='' src={frontSprite}/>;

  const back = <img width='150px' alt='' src={backSprite}/>;

  return (
    <div className='card'>
      {_name}
      <div className='sprites'>
        {front}
        {back}
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  frontSprite: PropTypes.string,
  backSprite: PropTypes.string
};

Card.defaultProps = {
  name: '',
  type: '',
  frontSprite: '',
  backSprite: ''
};

export default Card;

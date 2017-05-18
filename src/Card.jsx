import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Card = ({
  backSprite,
  frontSprite,
  name,
  type
}) => {

  const back = <img width='150px' alt='' src={backSprite}/>;

  const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

  const front = <img width='150px' alt='' src={frontSprite}/>;

  const label = (<div className='label'>
      {`${capitalize(name)} - ${capitalize(type)}`}
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
  backSprite: PropTypes.string,
  frontSprite: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string
};

Card.defaultProps = { };

export default Card;

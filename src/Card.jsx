import React, { PropTypes } from 'react';
import './App.css';

const Card = ({
  name,
  type,
  frontSprite,
  backSprite
}) => {

  const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

  const _name = (<span>Name:
      <strong>
        {capitalize(name)}
      </strong>
    </span>);

  const _type = (<span>Type:
      <strong>
        {capitalize(type)}
      </strong>
    </span>);

  const front = (
    <img width='200px' alt='' src={frontSprite}/>
  );

  const back = (
    <img width='200px' alt='' src={backSprite}/>
  );

  return (
    <div>
      {_name}
      {_type}
      {front}
      {back}
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

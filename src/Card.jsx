import React, { PropTypes } from 'react';
import './App.css';

const Card = ({
  name,
  type,
  frontSprite,
  backSprite
}) => {

  const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

  const _name = (<div className='name'>
      <span>Name:
        <strong>
          {` ${capitalize(name)}`}
        </strong>
      </span>
    </div>);

  const _type = (<div className='type'>
      <span>Type:
        <strong>
          {` ${capitalize(type)}`}
        </strong>
      </span>
    </div>);

  const front = (
    <img width='200px' alt='' src={frontSprite}/>
  );

  const back = (
    <img width='200px' alt='' src={backSprite}/>
  );

  return (
    <div className='card'>
      {_name}
      {_type}
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

import React from 'react';
import './PlayingCard.css';

const PlayingCard = ({ children, key }) => {
  return (
    <li className='playing-card' key={key}>{children}</li>
  );
};

export default PlayingCard;

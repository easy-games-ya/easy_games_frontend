import React from 'react';
import './PlayingCard.css';

const PlayingCard = ({ children, id }) => {
  return (
    <li className='playing-card' key={id}>{children}</li>
  );
};

export default PlayingCard;

import React from 'react';
import { Link } from 'react-router-dom';
import './PlayingCard.css';

const PlayingCard = ({ children, id, type }) => {
  return ((type === 'question')
    ? (
      <Link className='playing-card' to={`question/${id}`}>{children}</Link>
    )
    : (
      <div className='playing-card'>{children}</div>
    ));
};

export default PlayingCard;

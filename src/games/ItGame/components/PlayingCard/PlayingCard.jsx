import React from 'react';
import { Link } from 'react-router-dom';
import './PlayingCard.css';

const PlayingCard = ({ children, id }) => {
  return (
    <Link className='playing-card' to={`question/${id}`}>{children}</Link>
  );
};

export default PlayingCard;

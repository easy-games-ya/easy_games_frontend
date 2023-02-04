import React from 'react';
import './RecordCard.css';

const RecordCard = ({ id, name, score }) => {
  return (
    <li className='record-card' key={id}>
      <p className='record-card__name'>{name}</p>
      <p className='record-card__score'>{score}</p>
    </li>
  );
};

export default RecordCard;

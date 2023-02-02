import React from 'react';
import './RecordCard.css';

const RecordCard = ({ key, name, score }) => {
  return (
    <li className='record-card' key={key}>
      <p className='record-card__name'>{name}</p>
      <p className='record-card__score'>{score}</p>
    </li>
  );
};

export default RecordCard;

import React, { FC } from 'react';
import './RecordCard.css';

export interface RecordCardProps {
  id: string,
  name: string,
  score: number,
};

const RecordCard: FC<RecordCardProps> = ({ id, name, score }) => {
  return (
    <li className='record-card' key={id}>
      <p className='record-card__name'>{name}</p>
      <p className='record-card__score'>{score}</p>
    </li>
  );
};

export default RecordCard;

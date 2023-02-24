import React from 'react';
import { Link } from 'react-router-dom';
import './PlayingCard.css';
import { PlayingCardType } from '../../utils/enums';

export interface PlayingCardProps {
  id: string,
  type: PlayingCardType,
  children: React.ReactNode,
}

const PlayingCard: React.FC<PlayingCardProps> = ({ id, type, children }) => {
  return ((type === PlayingCardType.QUESTION)
    ? (
      <Link className='playing-card' to={`question/${id}`}>{children}</Link>
    )
    : (
      <div className='playing-card'>{children}</div>
    ));
};

export default PlayingCard;

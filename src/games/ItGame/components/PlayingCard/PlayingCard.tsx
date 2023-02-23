import React from 'react';
import { Link } from 'react-router-dom';
import './PlayingCard.css';

export enum PlayingCardVariant {
  question,
  category,
}

export interface PlayingCardProps {
  id: string,
  type: PlayingCardVariant,
  children: React.ReactNode,
}

const PlayingCard: React.FC<PlayingCardProps> = ({ id, type, children }) => {
  return ((type === PlayingCardVariant.question)
    ? (
      <Link className='playing-card' to={`question/${id}`}>{children}</Link>
    )
    : (
      <div className='playing-card'>{children}</div>
    ));
};

export default PlayingCard;

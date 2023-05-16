import React, { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './PlayingCard.scss';
import { PlayingCardType } from '../../utils/enums';

export interface PlayingCardProps {
  id: number,
  type: PlayingCardType,
  children: ReactNode | number,
}

const PlayingCard: FC<PlayingCardProps> = ({ id, type, children }) => {
  return ((type === PlayingCardType.QUESTION)
    ? (
      <Link className='playing-card' to={`question/${id}/cost/${children}`}>{children}</Link>
    )
    : (
      <div className='playing-card'>{children}</div>
    ));
};

export default PlayingCard;

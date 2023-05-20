import React, { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './PlayingCard.scss';
import { PlayingCardType } from '../../utils/enums';

type CategoryCardProps = {
  id: number,
  type: PlayingCardType.CATEGORY,
  children: string,
};

type QuestionCardProps = {
  id: number,
  type: PlayingCardType.QUESTION,
  children: number,
};

export type PlayingCardProps = CategoryCardProps | QuestionCardProps;

const PlayingCard: FC<PlayingCardProps> = ({ id, type, children }) => {
  return ((type === PlayingCardType.QUESTION)
    ? (
      <Link className='playing-card playing-card_type_question' to={`category/${id}/cost/${children}`}>{children}</Link>
    )
    : (
      <div className='playing-card'>{children}</div>
    ));
};

export default PlayingCard;

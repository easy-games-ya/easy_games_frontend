import React, { FC } from 'react';
import './PlayingField.css';
import PlayingCard from '../PlayingCard/PlayingCard';
import { IResponseCard } from '../../utils/types';
import { PlayingCardType } from '../../utils/enums';

interface PlayingFieldProps {
  categoriesList: IResponseCard[],
}

const PlayingField: FC<PlayingFieldProps> = ({ categoriesList }) => {
  return (
    <section className='playing-field'>
      <ul className='playing-field__themes'>
        {categoriesList.map((card) => {
          return (
            <li className='playing-field__item' key={card.id}>
              <PlayingCard id={card.id} type={PlayingCardType.CATEGORY}>{card.title}</PlayingCard>
            </li>
          );
        })}
      </ul>
      <ul className='playing-field__questions'>
        {categoriesList.map((category: { id: string, question: string[] }) => {
          return (
            <ul className='playing-field__questions' key={category.id}>
              {category.question.map((card, index) => {
                return (
                  <li className='playing-field__item' key={category.question[index]}>
                    <PlayingCard id={category.question[index]} type={PlayingCardType.QUESTION}>{((index + 1) * 100)}</PlayingCard>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </ul>
    </section>
  );
};

export default PlayingField;

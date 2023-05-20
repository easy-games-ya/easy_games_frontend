import React, { FC } from 'react';
import './PlayingField.scss';
import PlayingCard from '../PlayingCard/PlayingCard';
import { ICategoryCard } from '../../utils/types';
import { PlayingCardType } from '../../utils/enums';

interface PlayingFieldProps {
  categoriesList: ICategoryCard[],
}

const PlayingField: FC<PlayingFieldProps> = ({ categoriesList }) => {
  const costList: number[] = [100, 200, 300, 400, 500];

  return (
    <section className='playing-field'>
      <ul className='playing-field__categories'>
        {categoriesList.map((card) => {
          return (
            <li className='playing-field__item' key={card.id}>
              <PlayingCard id={card.id} type={PlayingCardType.CATEGORY}>{card.title}</PlayingCard>
              <div className='playing-field__category-description'>{card.description}</div>
            </li>
          );
        })}
      </ul>
      <ul className='playing-field__questions'>
        {categoriesList.map((category: { id: number }) => {
          return (
            <ul className='playing-field__questions' key={category.id}>
              {costList.map((cost) => {
                return (
                  <li className='playing-field__item' key={category.id + cost}>
                    <PlayingCard id={category.id} type={PlayingCardType.QUESTION}>{cost}</PlayingCard>
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

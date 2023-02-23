import React from 'react';
import './PlayingField.css';
import PlayingCard, { PlayingCardVariant } from '../PlayingCard/PlayingCard';
import { IResponseCard } from '../../utils/types';

interface PlayingFieldProps {
  categoriesList: IResponseCard[] | null,
}

const PlayingField: React.FC<PlayingFieldProps> = ({ categoriesList }) => {
  return (
    <section className='playing-field'>
      <ul className='playing-field__themes'>
        {categoriesList && categoriesList.map((card) => {
          return (
            <li className='playing-field__item' key={card.id}>
              <PlayingCard id={card.id} type={PlayingCardVariant.category}>{card.title}</PlayingCard>
            </li>
          );
        })}
      </ul>
      <ul className='playing-field__questions'>
        {categoriesList && categoriesList.map((category: { id: string, question: string[] }) => {
          return (
            <ul className='playing-field__questions' key={category.id}>
              {category.question.map((card, index) => {
                return (
                  <li className='playing-field__item' key={category.question[index]}>
                    <PlayingCard id={category.question[index]} type={PlayingCardVariant.question}>{((index + 1) * 100)}</PlayingCard>
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

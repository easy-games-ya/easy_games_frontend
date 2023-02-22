import React from 'react';
import './PlayingField.css';
import PlayingCard from '../PlayingCard/PlayingCard';

interface PlayingFieldProps {
  categoriesList: [] | null,
}

const PlayingField: React.FC<PlayingFieldProps> = ({ categoriesList }) => {
  return (
    <section className='playing-field'>
      <ul className='playing-field__themes'>
        {categoriesList && categoriesList.map((card: { id: string, title: string }) => {
          return (
            <li className='playing-field__item' key={card.id}>
              <PlayingCard id={card.id} type={undefined}>{card.title}</PlayingCard>
            </li>
          );
        })}
      </ul>
      <ul className='playing-field__questions'>
        {categoriesList && categoriesList.map((category: { id: string, question: [] }) => {
          return (
            <ul className='playing-field__questions' key={category.id}>
              {category.question.map((card, index) => {
                return (
                  <li className='playing-field__item' key={category.question[index]}>
                    <PlayingCard id={category.question[index]} type='question'>{((index + 1) * 100)}</PlayingCard>
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

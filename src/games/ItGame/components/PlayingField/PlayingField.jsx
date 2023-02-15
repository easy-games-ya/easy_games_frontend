import React from 'react';
import './PlayingField.css';
import PlayingCard from '../PlayingCard/PlayingCard';

const PlayingField = ({ categoriesList }) => {
  return (
    <section className='playing-field'>
      <ul className='playing-field__themes'>
        {categoriesList.map((card) => {
          return (
            <li className='playing-field__item' key={card.id}>
              <PlayingCard id={card.id}>{card.title}</PlayingCard>
            </li>
          );
        })}
      </ul>
      <ul className='playing-field__questions'>
        {categoriesList.map((category) => {
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

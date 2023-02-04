import React from 'react';
import './Question.css';

const Question = ({ image, question, answerOpened }) => {
  return (
    <main className={`main question ${answerOpened && 'display_none'}`}>
      {
        image
      && <img className='question__image' src={image} alt='изображение' />
      }
      {
        question
      && <p className='question__text'>{question}</p>
      }
      <form className='question__form'>
        <input className='question__input' />
        <button className='button' type='submit'>
          <span style={{ color: 'var(--color-text-accent)' }}>О</span>
          тветить
        </button>
      </form>
      <p className='question__time'>00:22</p>
    </main>
  );
};

export default Question;

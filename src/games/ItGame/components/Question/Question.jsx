import React from 'react';
import './Question.css';
import Button from '../../ui/Button/Button';

const Question = ({ image, question, answerOpened }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className={`main question ${answerOpened && 'display_none'}`}>
      {
        image
      && <img className='question__image' src={image} alt='изображение' />
      }
      {
        question
      && (
        <p className='question__text'>{question}</p>
      )
      }
      <form className='question__form'>
        <input className='question__input' />
        <Button isSubmit onClick={handleSubmit}>Ответить</Button>
      </form>
      <p className='question__time'>00:22</p>
    </main>
  );
};

export default Question;
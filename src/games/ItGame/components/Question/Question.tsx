import React from 'react';
import './Question.css';
import Button from '../../ui/Button/Button';

interface QuestionProps {
  image?: string,
  text?: string,
  answerOpened: boolean,
}

const Question: React.FC<QuestionProps> = ({ image, text, answerOpened }) => {
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
  };

  return (
    <main className={`main question ${answerOpened && 'display_none'}`}>
      {
        image
      && <img className='question__image' src={image} alt='изображение' />
      }
      {
        text
      && (
        <p className='question__text'>{text}</p>
      )
      }
      <form className='question__form'>
        <input className='question__input' />
        <Button isSubmit onClick={() => {handleSubmit;}} isDisabled={false}>Ответить</Button>
      </form>
      <p className='question__time'>00:22</p>
    </main>
  );
};

export default Question;

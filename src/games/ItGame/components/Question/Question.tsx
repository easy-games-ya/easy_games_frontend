import React from 'react';
import './Question.css';
import Button from '../../ui/Button/Button';

interface QuestionProps {
  image?: string,
  question?: string,
  answerOpened: boolean,
  answerTheQuestion: (inputText: string) => void,
}

const Question: React.FC<QuestionProps> = ({ image, question, answerOpened, answerTheQuestion }) => {
  const [inputText, setInputText] = React.useState<string>('');

  const handleAnswerInput = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    answerTheQuestion(inputText);
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
      <form className='question__form' onSubmit={handleSubmit}>
        <input className='question__input' type='text' name='answer' value={inputText} onChange={handleAnswerInput} />
        <Button isSubmit isDisabled={false}>Ответить</Button>
      </form>
      <p className='question__time'>00:22</p>
    </main>
  );
};

export default Question;

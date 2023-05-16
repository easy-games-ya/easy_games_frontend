import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import './Question.scss';
import Button from '../../ui/Button/Button';
import { ButtonType, InputType } from '../../utils/enums';
import Input from '../../ui/Input/Input';

interface QuestionProps {
  image?: string,
  question?: string,
  time: string;
  answerOpened: boolean,
  handleAnswerTheQuestion: (inputText: string, isThereTime: boolean) => void,
}

const Question: FC<QuestionProps> = ({ image, question, time, answerOpened, handleAnswerTheQuestion }) => {
  const [inputText, setInputText] = useState<string>('');

  const handleAnswerInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    handleAnswerTheQuestion(inputText, true);
  };

  return (
    <main className={`it-game__main question ${answerOpened && 'display_none'}`}>
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
        <Input type={InputType.TEXT} name='answer' value={inputText} onChange={handleAnswerInput} />
        <Button type={ButtonType.SUBMIT} isDisabled={false}>Ответить</Button>
      </form>
      <p className='question__time'>{time}</p>
    </main>
  );
};

export default Question;

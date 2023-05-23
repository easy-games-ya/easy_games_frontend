import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import './Question.scss';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import { ButtonType, InputType } from '../../utils/enums';

interface QuestionProps {
  image: string | null,
  question: string,
  time: string;
  questionOpened: boolean,
  handleAnswerTheQuestion: (inputText: string, isThereTime: boolean) => void,
}

const Question: FC<QuestionProps> = ({ image, question, time, questionOpened, handleAnswerTheQuestion }) => {
  const [inputText, setInputText] = useState<string>('');

  const handleAnswerInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const userAnswer = inputText ? inputText : 'нет ответа';
    handleAnswerTheQuestion(userAnswer, true);
  };

  return (
    <section className={`question ${questionOpened ? 'question_showed' : ''}`}>
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
        <Button type={ButtonType.SUBMIT}>Ответить</Button>
      </form>
      <p className='question__time'>{time}</p>
    </section>
  );
};

export default Question;

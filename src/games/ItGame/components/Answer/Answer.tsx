import React, { FC } from 'react';
import './Answer.scss';
import rightImage from '../../images/it-game_right.svg';
import failImage from '../../images/it-game_fail.svg';
import Button from '../../ui/Button/Button';
import { ButtonType } from '../../utils/enums';

interface AnswerProps {
  answer: string,
  answerOpened: boolean,
  isCorrectAnser: boolean,
};

const Answer: FC<AnswerProps> = ({ answer, answerOpened, isCorrectAnser }) => {
  return (
    <section className={`answer ${answerOpened ? 'answer_showed' : ''}`}>
      <p className='answer__text'>{isCorrectAnser ? 'Правильный ответ' : `Неправильный ответ. Верный: ${answer}`}</p>
      <img className='answer__image' src={isCorrectAnser ? rightImage : failImage} alt={isCorrectAnser ? 'Верно!' : 'Провал!'} />
      <Button type={ButtonType.LINK} to='/it-game'>Вернуться</Button>
    </section>
  );
};

export default Answer;

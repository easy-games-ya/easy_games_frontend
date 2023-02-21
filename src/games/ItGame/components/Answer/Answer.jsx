import React from 'react';
import './Answer.css';
import rightImage from '../../images/it-game_right.svg';
import failImage from '../../images/it-game_fail.svg';

const Answer = ({ answerOpened, isCorrectAnser }) => {
  return (
    <main className={`main answer ${!answerOpened && 'display_none'}`}>
      <p className='answer__text'>{isCorrectAnser ? 'Правильный ответ' : 'Неправильный ответ'}</p>
      <img className='answer__image' src={isCorrectAnser ? rightImage : failImage} alt={isCorrectAnser ? 'Верно!' : 'Провал!'} />
    </main>
  );
};

export default Answer;

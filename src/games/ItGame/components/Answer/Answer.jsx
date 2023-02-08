import React from 'react';
import './Answer.css';
import rightImage from '../../images/it-game_right.svg';
import failImage from '../../images/it-game_fail.svg';

const Answer = ({ answerOpened, isCorrectAnser }) => {
  return (
    <main className={`main answer ${!answerOpened && 'display_none'}`}>
      <p className='answer__text'>
        <span style={{ color: 'var(--color-text-accent)' }}>{isCorrectAnser ? 'П' : 'Н'}</span>
        {isCorrectAnser ? 'равильный ответ' : 'еправильный ответ'}
      </p>
      <img className='answer__image' src={isCorrectAnser ? rightImage : failImage} alt={isCorrectAnser ? 'Верно!' : 'Провал!'} />
    </main>
  );
};

export default Answer;

import React from 'react';
import './FinalPage.css';
import Header from '../../components/Header/Header';
import finalEmoji from '../../../../images/it-game_final.svg';

const FinalPage = () => {
  return (
    <div className='page'>
      <Header />
      <main className='main final'>
        <h1 className='final__title'>
          <span style={{ color: 'var(--color-text-accent)' }}>И</span>
          гра окончена!
        </h1>
        <p className='final__subtitle'>
          Иероним, вы набрали
          {' '}
          <span style={{ color: 'var(--color-text-accent)' }}>ХХХ</span>
          {' '}
          баллов!
        </p>
        <img className='final__emoji' src={finalEmoji} alt='Поздравляем!' />
      </main>
    </div>
  );
};

export default FinalPage;

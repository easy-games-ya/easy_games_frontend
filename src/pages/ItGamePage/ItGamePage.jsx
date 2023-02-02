import React from 'react';
import './ItGamePage.css';
import itGameLogo from '../../images/it-game__logo.svg';

const OwnGamePage = () => {
  return (
    <div className='page'>
      <header className='header'>
        <img className='header__logo' src={itGameLogo} alt='Своя игра' />
      </header>
      <main className='main'>
        <section className='grid-section'>
          <div className='grid'>Игра-викторина &quot;Своя игра&quot;</div>
        </section>
        <section className='info-section'>
          <div className='profile-card'>
            <img className='profile-card__avatar' src='' alt='Аватарка' />
            <p className='profile-card__name'>Иероним</p>
            <p className='profile-card__score'>1250</p>
          </div>
          <div className='records'>
            <p className='recards__title'>Лучшие результаты</p>
            <ul className='records__flex-row'>
              <li className='record-card'>
                <p className='record-card__name'>Леонардо</p>
                <p className='record-card__score'>4500</p>
              </li>
              <li className='record-card'>
                <p className='record-card__name'>Донателло</p>
                <p className='record-card__score'>2300</p>
              </li>
              <li className='record-card'>
                <p className='record-card__name'>Рафаэль</p>
                <p className='record-card__score'>3300</p>
              </li>
            </ul>
          </div>
          <p className='info-section__time'>00:30</p>
        </section>
      </main>
    </div>
  );
};

export default OwnGamePage;

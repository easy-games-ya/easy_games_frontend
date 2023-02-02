import React from 'react';
import './InfoSection.css';
import avatar from '../../../../images/it-game_avatar.svg';

const InfoSection = () => {
  return (
    <section className='info-section'>
      <div className='profile-card'>
        <img className='profile-card__avatar' src={avatar} alt='Аватарка' />
        <p className='profile-card__name'>Иероним</p>
        <p className='profile-card__score'>1250</p>
      </div>
      <div className='info-section__records'>
        <p className='info-section__records-caption'>Лучшие результаты</p>
        <ul className='info-section__records-row'>
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
  );
};

export default InfoSection;

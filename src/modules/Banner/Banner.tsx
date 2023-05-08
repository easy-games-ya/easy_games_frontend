import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './Banner.scss';
import itGameIllustration from '../../images/it-game-illustration.svg';

const Banner: FC = () => {
  return (
    <section className='banner'>
      <h1 className='banner__title'>Есть вопрос</h1>
      <Link className='banner__button' to='/it-game'>
        <span>Играть</span>
      </Link>
      <img className='banner__image' src={itGameIllustration} alt='Есть вопрос' />
    </section>
  );
};

export default Banner;

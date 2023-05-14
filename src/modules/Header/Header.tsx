import React, { FC } from 'react';
import './Header.scss';
import itGameLogo from '../../images/it-game-logo.svg';

const Header: FC = () => {
  return (
    <header className='header'>
      <img className='header__logo' src={itGameLogo} alt='Есть вопрос' />
      <a className='header__link' href='#rules'>Правила игры</a>
    </header>
  );
};

export default Header;

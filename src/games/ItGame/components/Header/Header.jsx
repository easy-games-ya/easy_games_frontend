import React from 'react';
import './Header.css';
import itGameLogo from '../../../../images/it-game_logo.svg';

const Header = () => {
  return (
    <header className='header'>
      <img className='header__logo' src={itGameLogo} alt='Своя игра' />
    </header>
  );
};

export default Header;

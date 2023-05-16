import React, { FC } from 'react';
import './Header.scss';
import itGameLogo from '../../images/it-game_logo.svg';

const Header: FC = () => {
  return (
    <header className='it-header'>
      <img className='it-header__logo' src={itGameLogo} alt='Есть вопрос' />
    </header>
  );
};

export default Header;

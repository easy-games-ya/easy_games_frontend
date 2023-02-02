import React from 'react';
import './WelcomePage.css';
import FormLogin from '../../components/FormLogin/FormLogin';
import itGameLogo from '../../../../images/it-game_logo.svg';

const WelcomePage = () => {
  return (
    <div className='page'>

      <div className='welcome-page'>
        <img className='welcome-page__logo' src={itGameLogo} alt='' />
        <h1 className='welcome-page__title'>добро пожаловать!</h1>
        <FormLogin />
      </div>
    </div>
  );
};

export default WelcomePage;

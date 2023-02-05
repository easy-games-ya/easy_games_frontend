import React, { useState } from 'react';
import './WelcomePage.css';
import FormLogin from '../../components/FormLogin/FormLogin';
import itGameLogo from '../../../../images/it-game_logo.svg';
import ModalRules from '../../components/ModalRules/ModalRules';

const WelcomePage = () => {
  const [openRules, setOpenRules] = useState(false);

  const openedRules = () => {
    setOpenRules(true);
  };
  const closedRules = (e) => {
    if (e.target === e.currentTarget) {
      setOpenRules(false);
    }
    if (e.code === 'Escape') {
      setOpenRules(false);
    }
  };

  return (
    <div className='page'>
      <div role='button' tabIndex={0} className='page-container' onKeyDown={closedRules}>

        <div className='welcome-page'>
          <img className='welcome-page__logo' src={itGameLogo} alt='' />
          <h1 className='welcome-page__title'>добро пожаловать!</h1>
          <FormLogin />
          {/* TODO проблема */}
          {openRules ? <ModalRules closeRules={closedRules} /> : ''}
        </div>
        <button type='button' className='welcome-page__text' onClick={openedRules}>
          <span className='form__button_yellow-letter'>П</span>
          равила
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;

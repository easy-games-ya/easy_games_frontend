import React, { useState } from 'react';
import './WelcomePage.css';
import FormLogin from '../../components/FormLogin/FormLogin';
import itGameLogo from '../../../../images/it-game_logo.svg';
import ModalRules from '../../components/ModalRules/ModalRules';

const WelcomePage = () => {
  const [openRules, setOpenRules] = useState(false);
  const [formParams, setFormParams] = useState({ name: '', gender: 'man' });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formParams);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormParams((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className='page'>
      <div className='page-container' role='button' tabIndex={0} onKeyDown={closedRules}>

        <div className='welcome-page'>
          <img className='welcome-page__logo' src={itGameLogo} alt='' />
          <h1 className='welcome-page__title'>добро пожаловать!</h1>
          <FormLogin formSubmit={handleSubmit} onchange={handleChange} />
          {openRules ? <ModalRules closeRules={closedRules} /> : null}
        </div>

        <button className='welcome-page__text' type='button' onClick={openedRules}>
          <span className='form__button_yellow-letter'>П</span>
          равила
        </button>

      </div>
    </div>
  );
};

export default WelcomePage;

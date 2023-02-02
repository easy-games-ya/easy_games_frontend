import React from 'react';

import './FormLogin.css';

const FormLogin = () => {
  return (

    <form className='form' action=''>
      <fieldset className='form__fieldset'>
        <label htmlFor=''>
          <input className='form__input' type='text' placeholder='Введите своё имя...' />
        </label>
        <label htmlFor=''>
          <select className='form__select' name='' id=''>
            <option value=''>М</option>
            <option value=''>Ж</option>
          </select>
        </label>
      </fieldset>
      <button className='form__button' type='submit'>
        <span className='form__button_yellow-letter'>В</span>
        ход
      </button>

    </form>
  );
};

export default FormLogin;

import React from 'react';

import './FormLogin.css';

const FormLogin = ({ formSubmit, onchange }) => {
  return (

    <form className='form' action='' method='get' name='form-login' onSubmit={formSubmit}>
      <fieldset className='form__fieldset'>

        <label htmlFor='name'>
          <input
            className='form__input'
            id='name'
            name='name'
            type='text'
            onChange={onchange}
            placeholder='Введите своё имя...'
          />
        </label>

        <label htmlFor='gender'>
          <select className='form__select' defaultValue='man' id='gender' name='gender' onChange={onchange}>
            <option value='man'>М</option>
            <option value='woman'>Ж</option>
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

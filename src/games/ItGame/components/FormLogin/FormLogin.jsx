import React from 'react';

import './FormLogin.css';
import Button from '../../ui/button';

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
      <Button isSubmit text='Вход' isDisabled />

    </form>
  );
};

export default FormLogin;

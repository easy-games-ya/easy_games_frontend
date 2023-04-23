import React from 'react';
import './FormLogin.css';
import Button from '../../ui/Button/Button';

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

      </fieldset>
      <Button type='submit'>Вход</Button>

    </form>
  );
};

export default FormLogin;

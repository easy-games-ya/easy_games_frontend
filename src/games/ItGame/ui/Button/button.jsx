import React from 'react';
import './button.css';
import TextYellowFirstLetter from '../TextYellowFirstLetter/TextYellowFirstLetter';

const Button = ({ isSubmit, isDisabled, text }) => {
  return (
    <button
      className='button'
      type={isSubmit ? 'submit' : 'button'}
      disabled={isDisabled}
    >
      {TextYellowFirstLetter({ text })}
    </button>
  );
};

export default Button;

import React from 'react';
import './button.css';

const Button = ({ isSubmit, isDisabled, text }) => {
  const letters = text.split('');
  letters[0] = <span style={{ color: 'var(--color-text-accent)' }}>{letters[0]}</span>;

  return (
    <button
      className='button'
      type={isSubmit ? 'submit' : 'button'}
      disabled={isDisabled}
    >
      {letters}
    </button>
  );
};

export default Button;

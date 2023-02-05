import React from 'react';
import './TextYellowFirstLetter.css';

const TextYellowFirstLetter = ({ text }) => {
  const letters = text.split('');
  letters[0] = <span style={{ color: 'var(--color-text-accent)' }}>{letters[0]}</span>;
  return (
    letters
  );
};

export default TextYellowFirstLetter;
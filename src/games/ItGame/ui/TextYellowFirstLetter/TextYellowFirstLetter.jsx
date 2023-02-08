import React from 'react';

const TextYellowFirstLetter = ({ text }) => {
  return (
    <>
      <span style={{ color: 'var(--color-text-accent)' }}>{text.slice(0, 1)}</span>
      {text.slice(1)}
    </>
  );
};
export default TextYellowFirstLetter;

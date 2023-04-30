import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner: FC = () => {
  return (
    <section>
      <Link to='/it-game'>Играть</Link>
    </section>
  );
};

export default Banner;

import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {
  return (
    <main className='main'>
      Главная страница проекта &quot;Просты игры&quot;
      <Link to='/it-game'>IT-игра</Link>
    </main>
  );
};

export default MainPage;

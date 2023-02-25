import React, { Dispatch, FC, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

interface MainPageProps {
  loggedIn: boolean,
  setLoggedIn: Dispatch<SetStateAction<boolean>>,
};

const MainPage: FC<MainPageProps> = ({ loggedIn, setLoggedIn }) => {
  return (
    <main className='main'>
      <h1>Главная страница проекта &quot;Простые игры&quot;</h1>
      <p>{`Пользователь вошёл в учётную запись? ${loggedIn}`}</p>
      <button type='button' onClick={() => { setLoggedIn(!loggedIn); }}>Войти - выйти</button>
      <Link to='/it-game'>IT-игра</Link>
    </main>
  );
};

export default MainPage;

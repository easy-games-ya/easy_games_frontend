import React, { FC } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom'; // подключает хук для программной навигации
import './NotFoundPage.scss';
import Header from '../../modules/Header/Header';

const NotFoundPage: FC = () => {
  const navigate: NavigateFunction = useNavigate(); // хук для использования программной навигации

  return (
    <div className='page'>
      <Header />
      <main className='main'>
        Страница не найдена
        <button type='button' onClick={() => { return navigate(-1); }}>Вернуться назад</button>
        <button type='button' onClick={() => { return navigate('/'); }}>На главную</button>
      </main>
    </div>
  );
};

export default NotFoundPage;

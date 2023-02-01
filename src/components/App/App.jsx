import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from '../../pages/MainPage/MainPage';
import OwnGamePage from '../../pages/OwnGamePage/OwnGamePage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [loggedIn, setLoggedIn] = React.useState(false); // пользователь вошёл в учётную запись?

  return (
    <div className='page'>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/own-game' element={<OwnGamePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;

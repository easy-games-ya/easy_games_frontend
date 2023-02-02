import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from '../../pages/MainPage/MainPage';
import ItGamePage from '../../pages/ItGamePage/ItGamePage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [loggedIn, setLoggedIn] = React.useState(false); // пользователь вошёл в учётную запись?

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/it-game' element={<ItGamePage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;

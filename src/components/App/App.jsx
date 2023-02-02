import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from '../../pages/MainPage/MainPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

import ItGamePage from '../../games/ItGame/index';
import MainPageItGame from '../../games/ItGame/pages/MainPage/MainPage';
import WelcomePageItGame from '../../games/ItGame/pages/WelcomePage/WelcomePage';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [loggedIn, setLoggedIn] = React.useState(false); // пользователь вошёл в учётную запись?

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/it-game' element={<ItGamePage />} />
      <Route path='/it-game' element={<ItGamePage />}>
        <Route path='' element={<MainPageItGame />} />
        <Route path='/welcome' element={<WelcomePageItGame />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;

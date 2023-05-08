import React, { FC, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.scss';
import ProtectedRoute from '../ProtectedRoute';
import MainPage from '../../pages/MainPage/MainPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

import ItGame from '../../games/ItGame/ItGame';
import {
  MainPageItGame,
  WelcomePageItGame,
  QuestionPageItGame,
  FinalPageItGame,
} from '../../games/ItGame/pages/pages';

const App: FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(true); // пользователь вошёл в учётную запись?

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/it-game' element={<ItGame />}>
        <Route path='' element={<ProtectedRoute loggedIn={loggedIn} component={MainPageItGame} link='welcome' />} />
        <Route path='welcome' element={<ProtectedRoute loggedIn={!loggedIn} component={WelcomePageItGame} link='/it-game' />} />
        <Route path='question/:id' element={<QuestionPageItGame />} />
        <Route path='final' element={<FinalPageItGame />} />
      </Route>
      <Route path='/easy_games_frontend' element={<Navigate to='/' replace />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;

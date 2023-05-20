import React, { FC, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.scss';
import ProtectedRoute from '../ProtectedRoute';
import MainPage from '../../pages/MainPage/MainPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import ItGame from '../../games/ItGame/ItGame';
import * as itGamePages from '../../games/ItGame/pages/pages';

const App: FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(true); // пользователь вошёл в учётную запись?

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/it-game' element={<ItGame />}>
        <Route path='' element={<ProtectedRoute loggedIn={loggedIn} component={itGamePages.MainPageItGame} link='welcome' />} />
        <Route path='welcome' element={<ProtectedRoute loggedIn={!loggedIn} component={itGamePages.WelcomePageItGame} link='/it-game' />} />
        <Route path='category/:id/cost/:cost' element={<itGamePages.QuestionPageItGame />} />
        <Route path='final' element={<itGamePages.FinalPageItGame />} />
      </Route>
      <Route path='/easy_games_frontend' element={<Navigate to='/' replace />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;

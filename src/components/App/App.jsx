import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProtectedRoute from '../ProtectedRoute';
import MainPage from '../../pages/MainPage/MainPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

import ItGame from '../../games/ItGame/index';
import MainPageItGame from '../../games/ItGame/pages/MainPage/MainPage';
import WelcomePageItGame from '../../games/ItGame/pages/WelcomePage/WelcomePage';
import QuestionPageItGame from '../../games/ItGame/pages/QuestionPage/QuestionPage';
import FinalPageItGame from '../../games/ItGame/pages/FinalPage/FinalPage';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [loggedIn, setLoggedIn] = React.useState(true); // пользователь вошёл в учётную запись?

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/it-game' element={<ItGame />}>
        <Route path='' element={<ProtectedRoute loggedIn={loggedIn} component={MainPageItGame} link='welcome' />} />
        <Route path='welcome' element={<ProtectedRoute loggedIn={!loggedIn} component={WelcomePageItGame} link='/it-game' />} />
        <Route path='question/:id' element={<QuestionPageItGame />} />
        <Route path='final' element={<FinalPageItGame />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;

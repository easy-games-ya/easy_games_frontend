import React from 'react';
import { Outlet } from 'react-router-dom';
import './ItGame.css';
import getCards from './api/MainApi';

const ItGame: React.FC = () => {
  const [categoriesList, setCategoriesList] = React.useState([]); // список категорий в игре

  React.useEffect(() => {
    getCards('testuser', 'i113R56qV', setCategoriesList);
  }, []);

  return (
    <Outlet context={{ categoriesList }} />
  );
};

export default ItGame;

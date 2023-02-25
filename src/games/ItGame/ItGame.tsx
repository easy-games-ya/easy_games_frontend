import React from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import './ItGame.css';
import getCards from './api/MainApi';
import { IResponseCard } from './utils/types';

type ContextType = { categoriesList: IResponseCard[]};

const ItGame: React.FC = () => {
  const [categoriesList, setCategoriesList] = React.useState<Array<IResponseCard>>([]); // список категорий в игре

  React.useEffect(() => {
    getCards({ username: 'testuser', password: 'i113R56qV' })
      .then((res) => {setCategoriesList(res);});
  }, []);

  return (
    <Outlet context={{ categoriesList }} />
  );
};

export default ItGame;

export function useCategories() {
  return useOutletContext<ContextType>();
};

import React from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import './ItGame.css';
import getCards from './api/MainApi';
import { IResponseCard } from './utils/types';

type ContextType = { categoriesList: IResponseCard[] | null };

const ItGame: React.FC = () => {
  const [categoriesList, setCategoriesList] = React.useState<Array<IResponseCard> | null>([]); // список категорий в игре

  React.useEffect(() => {
    getCards({ user: 'testuser', pass: 'i113R56qV' })
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

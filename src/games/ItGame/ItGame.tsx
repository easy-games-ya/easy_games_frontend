import React, { FC, useState, useEffect } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import './ItGame.css';
import getCards from './api/MainApi';
import { IResponseCard } from './utils/types';

type ContextType = { categoriesList: IResponseCard[]};

const ItGame: FC = () => {
  const [categoriesList, setCategoriesList] = useState<Array<IResponseCard>>([]); // список категорий в игре

  useEffect(() => {
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

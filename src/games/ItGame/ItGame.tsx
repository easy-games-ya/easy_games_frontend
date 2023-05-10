import React, { FC, useState, useEffect } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import './ItGame.css';
import itGameApi from './api/itGameApi';
import { IResponseCard } from './utils/types';

type CardsContextType = { categoriesList: IResponseCard[] };

const ItGame: FC = () => {
  const [categoriesList, setCategoriesList] = useState<Array<IResponseCard>>([]); // список категорий в игре

  useEffect(() => {
    itGameApi
      .getCards({ username: 'testuser', password: 'i113R56qV' })
      .then((res) => { setCategoriesList(res); });
  }, []);

  return (
    <Outlet context={{ categoriesList }} />
  );
};

export default ItGame;

export const useCategories = (): CardsContextType => {
  return useOutletContext<CardsContextType>();
};

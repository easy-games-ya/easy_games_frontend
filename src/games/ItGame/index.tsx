import React, { FC, useState, useEffect } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import './utils/vars.css';
import './ItGame.scss';
import itGameApi from './api/itGameApi';
import { ICategoryCard } from './utils/types';

type CardsContextType = { categoriesList: ICategoryCard[] };

const ItGame: FC = () => {
  const [categoriesList, setCategoriesList] = useState<Array<ICategoryCard>>([]); // список категорий в игре

  useEffect(() => {
    itGameApi
      .getCategories(5)
      .then((res) => { setCategoriesList(res); });
  }, []);

  return (
    <div className='it-game'>
      <Outlet context={{ categoriesList }} />
    </div>
  );
};

export default ItGame;

export const useCategories = (): CardsContextType => {
  return useOutletContext<CardsContextType>();
};

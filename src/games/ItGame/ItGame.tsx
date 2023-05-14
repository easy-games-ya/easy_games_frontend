import React, { FC, useState, useEffect } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import './utils/vars.css';
import './ItGame.scss';
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
    <div className='it-game'>
      <Outlet context={{ categoriesList }} />
    </div>
  );
};

export default ItGame;

export const useCategories = (): CardsContextType => {
  return useOutletContext<CardsContextType>();
};

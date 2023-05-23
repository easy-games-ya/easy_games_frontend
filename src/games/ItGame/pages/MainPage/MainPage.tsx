import React, { FC } from 'react';
import Header from '../../components/Header/Header';
import PlayingField from '../../components/PlayingField/PlayingField';
import InfoSection from '../../components/InfoSection/InfoSection';
import { useCategories } from '../..';

const MainPage: FC = () => {
  const { categoriesList } = useCategories();

  return (
    <div className='it-page'>
      <Header />
      <main className='it-page__main'>
        <PlayingField categoriesList={categoriesList} />
        <InfoSection />
      </main>
    </div>
  );
};

export default MainPage;

import React from 'react';
import { useOutletContext } from 'react-router-dom';

import Header from '../../components/Header/Header';
import PlayingField from '../../components/PlayingField/PlayingField';
import InfoSection from '../../components/InfoSection/InfoSection';

const MainPage = () => {
  const { categoriesList } = useOutletContext();

  return (
    <div className='page'>
      <Header />
      <main className='main'>
        <PlayingField categoriesList={categoriesList} />
        <InfoSection />
      </main>
    </div>
  );
};

export default MainPage;

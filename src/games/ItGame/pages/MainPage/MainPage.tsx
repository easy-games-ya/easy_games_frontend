import React, { FC } from 'react';
import { useCategories } from '../../ItGame';
import Header from '../../components/Header/Header';
import PlayingField from '../../components/PlayingField/PlayingField';
import InfoSection from '../../components/InfoSection/InfoSection';

const MainPage: FC = () => {
  const { categoriesList } = useCategories();

  return (
    <div className='it-game'>
      <Header />
      <main className='it-game__main'>
        <PlayingField categoriesList={categoriesList} />
        <InfoSection />
      </main>
    </div>
  );
};

export default MainPage;

import React from 'react';
import { useCategories } from '../../ItGame';
import Header from '../../components/Header/Header';
import PlayingField from '../../components/PlayingField/PlayingField';
import InfoSection from '../../components/InfoSection/InfoSection';

const MainPage: React.FC = () => {
  const { categoriesList } = useCategories();

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

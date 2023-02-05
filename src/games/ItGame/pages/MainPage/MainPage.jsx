import React from 'react';

import Header from '../../components/Header/Header';
import PlayingField from '../../components/PlayingField/PlayingField';
import InfoSection from '../../components/InfoSection/InfoSection';

const MainPage = () => {
  return (
    <div className='page'>
      <Header />
      <main className='main'>
        <PlayingField />
        <InfoSection />
      </main>
    </div>
  );
};

export default MainPage;

import React from 'react';

import Header from '../../components/Header/Header';
import PlayingField from '../../components/PlayingField/PlayingField';
import InfoSection from '../../components/InfoSection/InfoSection';
import getCards from '../../api/MainApi';

const MainPage = () => {
  const [categoriesList, setCategoriesList] = React.useState([]); // список категорий в игре

  React.useEffect(() => {
    getCards('testuser', 'i113R56qV', setCategoriesList);
  }, []);

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

import React from 'react';
import axios from 'axios';

import Header from '../../components/Header/Header';
import PlayingField from '../../components/PlayingField/PlayingField';
import InfoSection from '../../components/InfoSection/InfoSection';
// import mainApi from '../../api/MainApi';

const MainPage = () => {
  const [categoriesList, setCategoriesList] = React.useState([]); // список категорий в игре

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://myowngame.onrender.com/mog/api/category/', {
          headers: {
            'Content-Type': ['application/json', 'text/plain', '*/*'],
          },
          auth: {
            username: 'testuser',
            password: 'i113R56qV',
          },
        });
        setCategoriesList(response.data);
      } catch (err) {
        console.log(err);
      }
    }; fetchData();
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

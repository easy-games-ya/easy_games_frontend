import React from 'react';

import Header from '../../components/Header/Header';
import PlayingField from '../../components/PlayingField/PlayingField';
import InfoSection from '../../components/InfoSection/InfoSection';
// import mainApi from '../../api/MainApi';

const MainPage = () => {
  const [categotiesList, setCategotiesList] = React.useState([]); // список категорий в игре

  React.useEffect(() => {
    fetch('https://myowngame.onrender.com/mog/api/category', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic testuser:i113R56qV',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((categories) => {
        console.log(categories);
        setCategotiesList(categories);
      })
      .catch((err) => {
        console.log('мы тут', err);
      });

    /* mainApi
      .getCategories // загрузка карточек с приютами на главной странице
      .then((categories) => {
        console.log(categories);
        setCategotiesList(categories);
      })
      .catch((err) => {
        console.log('мы тут', err);
      }); */
  }, []);

  return (
    <div className='page'>
      <Header />
      <main className='main'>
        <PlayingField categotiesList={categotiesList} />
        <InfoSection />
      </main>
    </div>
  );
};

export default MainPage;

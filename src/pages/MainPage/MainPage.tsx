import React, { FC } from 'react';
import './MainPage.css';
import Header from '../../modules/Header/Header';
import Banner from '../../modules/Banner/Banner';
import Rules from '../../modules/Rules/Rules';
import Feedback from '../../modules/Feedback/Feedback';
import Footer from '../../modules/Footer/Footer';

const MainPage: FC = () => {
  return (
    <div className='page'>
      <Header />
      <main className='main'>
        <Banner />
        <Rules />
        <Feedback />
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;

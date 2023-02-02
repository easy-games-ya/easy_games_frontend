import React from 'react';
import './MainPage.css';
import Header from '../../components/Header/Header';
import InfoSection from '../../components/InfoSection/InfoSection';

const MainPage = () => {
  return (
    <div className='page'>
      <Header />
      <main className='main'>
        <section className='grid-section'>
          <div className='grid'>Игра-викторина &quot;Своя игра&quot;</div>
        </section>
        <InfoSection />
      </main>
    </div>
  );
};

export default MainPage;

import React from 'react';
import './InfoSection.css';
import ProfileCard from '../ProfileCard/ProfileCard';
import RecordCard from '../RecordCard/RecordCard';
import { IRecordCard } from '../../utils/types';
import avatar from '../../../../images/it-game_avatar.svg';

const InfoSection = () => {
  const [recordsList, setRecordsList] = React.useState<Array<IRecordCard> | null>([]); // список рекордов для этой игры

  const infoFromBackend: Array<IRecordCard> = [
    {
      id: '1',
      name: 'Леонардо',
      score: '4500',
    },
    {
      id: '2',
      name: 'Донателло',
      score: '2300',
    },
    {
      id: '3',
      name: 'Рафаэль',
      score: '3300',
    },
  ];

  React.useEffect(() => {
    setRecordsList(infoFromBackend);
  }, []);

  return (
    <section className='info-section'>
      <ProfileCard name='Иероним' avatar={avatar} score='1250' />
      <div className='info-section__records'>
        <p className='info-section__records-caption'>Лучшие результаты</p>
        <ul className='info-section__records-row'>
          {recordsList && recordsList.map((card: IRecordCard) => {
            return (
              <RecordCard key={card.id} id={card.id} name={card.name} score={card.score} />
            );
          })}
        </ul>
      </div>
      <p className='info-section__time'>00:30</p>
    </section>
  );
};

export default InfoSection;

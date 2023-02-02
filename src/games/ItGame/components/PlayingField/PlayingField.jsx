import React from 'react';
import './PlayingField.css';
import PlayingCard from '../PlayingCard/PlayingCard';

const PlayingField = () => {
  const [themesList, setThemesList] = React.useState([]); // список тем в игре
  const [questionsList, setQuestionsList] = React.useState([]); // список вопросов в игре

  React.useEffect(() => {
    setThemesList([ // будет запрашиваться с бэкенда
      {
        id: 101,
        theme: 'Тема 1',
      },
      {
        id: 102,
        theme: 'Тема 2',
      },
      {
        id: 103,
        theme: 'Тема 3',
      },
      {
        id: 104,
        theme: 'Тема 4',
      },
      {
        id: 105,
        theme: 'Тема 5',
      },
    ]);
    setQuestionsList([ // будет запрашиваться с бэкенда
      {
        id: 1,
        cost: '100',
      },
      {
        id: 2,
        cost: '200',
      },
      {
        id: 3,
        cost: '300',
      },
      {
        id: 4,
        cost: '400',
      },
      {
        id: 5,
        cost: '500',
      },
      {
        id: 6,
        cost: '100',
      },
      {
        id: 7,
        cost: '200',
      },
      {
        id: 8,
        cost: '300',
      },
      {
        id: 9,
        cost: '400',
      },
      {
        id: 10,
        cost: '500',
      },
      {
        id: 11,
        cost: '100',
      },
      {
        id: 12,
        cost: '200',
      },
      {
        id: 13,
        cost: '300',
      },
      {
        id: 14,
        cost: '400',
      },
      {
        id: 15,
        cost: '500',
      },
      {
        id: 16,
        cost: '100',
      },
      {
        id: 17,
        cost: '200',
      },
      {
        id: 18,
        cost: '300',
      },
      {
        id: 19,
        cost: '400',
      },
      {
        id: 20,
        cost: '500',
      },
      {
        id: 21,
        cost: '100',
      },
      {
        id: 22,
        cost: '200',
      },
      {
        id: 23,
        cost: '300',
      },
      {
        id: 24,
        cost: '400',
      },
      {
        id: 25,
        cost: '500',
      },
    ]);
  }, []);

  return (
    <section className='playing-field'>
      <ul className='playing-field__themes'>
        {themesList.map((card) => {
          return (<PlayingCard id={card.id}>{card.theme}</PlayingCard>);
        })}
      </ul>
      <ul className='playing-field__questions'>
        {questionsList.map((card) => {
          return (<PlayingCard id={card.id}>{card.cost}</PlayingCard>);
        })}
      </ul>
    </section>
  );
};

export default PlayingField;

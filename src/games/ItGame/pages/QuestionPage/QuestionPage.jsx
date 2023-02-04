import React from 'react';
import { useParams } from 'react-router-dom';
import './QuestionPage.css';
import Header from '../../components/Header/Header';
import questionImage from '../../../../images/it-game_image.jpg';

const QuestionPage = () => {
  const { id } = useParams(); // id вопроса, получаемый из url-адреса текущей страницы
  const [question, setQuestion] = React.useState({}); // информация о вопросе

  React.useEffect(() => {
    if (id % 2 === 1) {
      setQuestion({ // будет запрашиваться с бэкенда
        id: 1,
        question: `В 2011 году на спектакле в лондонском театре Barbican зрителям вместо кресел предлагались кровати,
      а завершалась программа утренним завтраком.
      Как назывался спектакль?`,
      });
    }
    if (id % 2 === 0) {
      setQuestion({ // будет запрашиваться с бэкенда
        id: 1,
        image: questionImage,
      });
    }
  }, [id]);

  return (
    <div className='page'>
      <Header />
      <main className='main question'>
        {
          question.image
        && <img className='question__image' src={question.image} alt='изображение' />
        }
        {
          question.question
        && <p className='question__text'>{question.question}</p>
        }
        <form className='question__form'>
          <input className='question__input' />
          <button className='button' type='submit'>
            <span style={{ color: 'var(--color-text-accent)' }}>О</span>
            тветить
          </button>
        </form>
        <p className='question__time'>00:22</p>
      </main>
    </div>
  );
};

export default QuestionPage;

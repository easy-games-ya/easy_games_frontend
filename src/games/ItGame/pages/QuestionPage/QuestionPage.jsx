import React from 'react';
import { useParams } from 'react-router-dom';
import './QuestionPage.css';
import Header from '../../components/Header/Header';
import questionImage from '../../../../images/it-game_image.jpg';

const QuestionPage = () => {
  const { id } = useParams(); // id вопроса, получаемый из url-адреса текущей страницы
  const [question, setQuestion] = React.useState({}); // информация о вопросе

  React.useEffect(() => {
    setQuestion({ // будет запрашиваться с бэкенда
      id,
      image: questionImage,
      question: `В 2011 году на спектакле в лондонском театре Barbican зрителям вместо кресел предлагались кровати,
      а завершалась программа утренним завтраком.
      Как назывался спектакль?`,
    });
  }, [id]);

  return (
    <div className='page'>
      <Header />
      <main className='main question'>
        <p className='question__text'>{question.question}</p>
        <img className='question__image' src={question.image} alt='изображение' />
        <form>
          <input />
          <button className='button' type='submit'>Ответить</button>
        </form>
      </main>
    </div>
  );
};

export default QuestionPage;

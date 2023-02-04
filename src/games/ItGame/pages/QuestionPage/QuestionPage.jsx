import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Question from '../../components/Question/Question';
import Answer from '../../components/Answer/Answer';
import questionImage from '../../../../images/it-game_image.jpg';

const QuestionPage = () => {
  const { id } = useParams(); // id вопроса, получаемый из url-адреса текущей страницы
  const [question, setQuestion] = React.useState({}); // информация о вопросе
  // eslint-disable-next-line no-unused-vars
  const [answerOpened, setAnswerOpened] = React.useState(false); // открыт модуль с ответом?
  // eslint-disable-next-line no-unused-vars
  const [isCorrectAnser, setIsCorrectAnser] = React.useState(true); // ответ правильный?

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
      <Question image={question.image} question={question.question} answerOpened={answerOpened} />
      <Answer answerOpened={answerOpened} isCorrectAnser={isCorrectAnser} />
    </div>
  );
};

export default QuestionPage;

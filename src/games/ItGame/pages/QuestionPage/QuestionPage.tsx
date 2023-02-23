import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Question from '../../components/Question/Question';
import Answer from '../../components/Answer/Answer';
import questionImage from '../../../../images/it-game_image.jpg';

interface IQuestion {
  id: number,
  image?: string,
  text?: string,
};

const QuestionPage: React.FC = () => {
  const { id } = useParams(); // id вопроса, получаемый из url-адреса текущей страницы
  const [question, setQuestion] = React.useState<IQuestion | null>({ id: 5 }); // информация о вопросе
  // eslint-disable-next-line no-unused-vars
  const [answerOpened, setAnswerOpened] = React.useState<boolean>(false); // открыт модуль с ответом?
  // eslint-disable-next-line no-unused-vars
  const [isCorrectAnser, setIsCorrectAnser] = React.useState<boolean>(true); // ответ правильный?

  React.useEffect(() => {
    if (question) {
      if (question.id % 2 === 1) {
        setQuestion({ // будет запрашиваться с бэкенда
          id: 1,
          text: `В 2011 году на спектакле в лондонском театре Barbican зрителям вместо кресел предлагались кровати,
        а завершалась программа утренним завтраком.
        Как назывался спектакль?`,
        });
      };
      if (question.id % 2 === 0) {
        setQuestion({ // будет запрашиваться с бэкенда
          id: 1,
          image: questionImage,
        });
      };
    }
  }, [id]);

  return (
    <div className='page'>
      <Header />
      {question && <Question image={question.image} text={question.text} answerOpened={answerOpened} />}
      {question && <Answer answerOpened={answerOpened} isCorrectAnser={isCorrectAnser} />}
    </div>
  );
};

export default QuestionPage;

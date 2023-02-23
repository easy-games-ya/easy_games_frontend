import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Question from '../../components/Question/Question';
import Answer from '../../components/Answer/Answer';
import getQuestionById from '../../api/QuestionApi';

export interface IQuestion {
  id: string,
  question?: string,
  answer: string,
  image?: string,
  category?: string,
  score: number,
};

const QuestionPage: React.FC = () => {
  const { id } = useParams(); // id вопроса, получаемый из url-адреса текущей страницы
  const [question, setQuestion] = React.useState<IQuestion | null>({ id: '', answer: '', score: 0 }); // информация о вопросе
  // eslint-disable-next-line no-unused-vars
  const [answerOpened, setAnswerOpened] = React.useState<boolean>(false); // открыт модуль с ответом?
  // eslint-disable-next-line no-unused-vars
  const [isCorrectAnser, setIsCorrectAnser] = React.useState<boolean>(true); // ответ правильный?

  React.useEffect(() => {
    if (question) {
      getQuestionById({ username: 'testuser', password: 'i113R56qV' }, id!)
        .then((res) => {setQuestion(res);});
    }
  }, [id]);

  return (
    <div className='page'>
      <Header />
      {question && <Question image={question.image} question={question.question} answerOpened={answerOpened} />}
      {question && <Answer answerOpened={answerOpened} isCorrectAnser={isCorrectAnser} />}
    </div>
  );
};

export default QuestionPage;

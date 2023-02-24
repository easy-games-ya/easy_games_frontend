import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Question from '../../components/Question/Question';
import Answer from '../../components/Answer/Answer';
import getQuestionById from '../../api/QuestionApi';
import { IQuestion } from '../../utils/types';

const QuestionPage: React.FC = () => {
  const { id } = useParams(); // id вопроса, получаемый из url-адреса текущей страницы
  const [question, setQuestion] = React.useState<IQuestion>({ id: '', answer: '', score: 0 }); // информация о вопросе
  const [answerOpened, setAnswerOpened] = React.useState<boolean>(false); // открыт модуль с ответом?
  const [isCorrectAnser, setIsCorrectAnser] = React.useState<boolean>(true); // ответ правильный?

  const answerTheQuestion = (inputText: string): void => {
    if (question?.answer) {
      setAnswerOpened(true);
      setIsCorrectAnser(question.answer === inputText);
    };
  };

  React.useEffect(() => {
    if (question) {
      getQuestionById({ username: 'testuser', password: 'i113R56qV' }, id!)
        .then((res) => {setQuestion(res);});
    };
  }, [id]);

  return (
    <div className='page'>
      <Header />
      {question && <Question image={question.image} question={question.question} answerOpened={answerOpened} answerTheQuestion={answerTheQuestion} />}
      {question && <Answer answerOpened={answerOpened} isCorrectAnser={isCorrectAnser} answer={question.answer} />}
    </div>
  );
};

export default QuestionPage;

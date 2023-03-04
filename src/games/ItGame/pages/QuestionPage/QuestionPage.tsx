import React, { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Question from '../../components/Question/Question';
import Answer from '../../components/Answer/Answer';
import itGameApi from '../../api/itGameApi';
import { IQuestion } from '../../utils/types';

const QuestionPage: FC = () => {
  const { id } = useParams(); // id вопроса, получаемый из url-адреса текущей страницы
  const [question, setQuestion] = useState<IQuestion>({ id: '', answer: '', score: 0 }); // информация о вопросе
  const [answerOpened, setAnswerOpened] = useState<boolean>(false); // открыт модуль с ответом?
  const [isCorrectAnser, setIsCorrectAnser] = useState<boolean>(true); // ответ правильный?
  const [time, setTime] = useState<string>('00:00'); // сколько времени осталось

  let min: number = 0; // изначальное количество минут на ответ
  let sec: number = 30; // изначальное количество секунд на ответ

  const doAnswerTheQuestion = (inputText: string, isThereTime: boolean): void => {
    if (question.answer || !isThereTime) {
      setAnswerOpened(true);
      setIsCorrectAnser(question.answer === inputText);
    };
  };

  const bringTime = (min: number, sec: number): string => {
    if (min < 10) {
      if (sec < 10) {
        return '0' + min + ':0' + sec;
      } else {
        return '0' + min + ':' + sec;
      };
    } else {
      if (sec < 10) {
        return min + ':0' + sec;
      } else {
        return min + ':' + sec;
      };
    };
  };

  const tick = (): void => {
    sec--;
    if (sec < 0) {
      sec = 59;
      min--;
    };
    setTime(bringTime(min, sec));
  };

  const add = (): void => {
    tick();
    !(min == 0 && sec == 0) ? setTimeout(add, 1000) : doAnswerTheQuestion('нет ответа', false);
  };

  useEffect(() => {
    setTime(bringTime(min, sec));
    itGameApi
      .getQuestionById({ username: 'testuser', password: 'i113R56qV' }, id!)
      .then((res) => {
        setQuestion(res);
      });
  }, [id]);

  useEffect(() => {
    question.answer !== '' && setTimeout(add, 1000);
  }, [question]);

  return (
    <div className='page'>
      <Header />
      {<Question
        image={question.image}
        question={question.question}
        time={time}
        answerOpened={answerOpened}
        handleAnswerTheQuestion={doAnswerTheQuestion}
      />}
      {<Answer answer={question.answer} answerOpened={answerOpened} isCorrectAnser={isCorrectAnser} />}
    </div>
  );
};

export default QuestionPage;

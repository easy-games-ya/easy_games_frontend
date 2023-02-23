import axios from 'axios';
import { baseUrl } from '../utils/constants';
import { IUserPass, IResponseSuccess } from '../utils/types';
import { IQuestion } from '../pages/QuestionPage/QuestionPage';

const getQuestionById = async (req: IUserPass, id: string) => {
  try {
    const response: IResponseSuccess = await axios.get(`${baseUrl}/question/${id}/`, {
      headers: {
        'Content-Type': ['application/json', 'text/plain', '*/*'],
      },
      auth: req,
    });
    return response.data as IQuestion;
  } catch (err) {
    throw new Error(`Ошибка ${err}`);
  };
};

export default getQuestionById;

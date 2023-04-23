import axios from 'axios';
import { baseUrl } from '../utils/constants';
import { IUserPass, IResponseSuccess, IQuestion } from '../utils/types';

class ItGameApi {
  constructor(
    public _baseUrl: string,
    public _headers: { 'Content-Type': string[] },
  ) { }

  getCards = async (req: IUserPass): Promise<[]> => {
    try {
      const response: IResponseSuccess = await axios.get(`${this._baseUrl}/category/`, {
        headers: this._headers,
        auth: req,
      });
      return response.data as [];
    } catch (err) {
      throw new Error(`Ошибка ${err}`);
    };
  };

  getQuestionById = async (req: IUserPass, id: string): Promise<IQuestion> => {
    try {
      const response: IResponseSuccess = await axios.get(`${this._baseUrl}/question/${id}/`, {
        headers: this._headers,
        auth: req,
      });
      return response.data as IQuestion;
    } catch (err) {
      throw new Error(`Ошибка ${err}`);
    };
  };
};

const itGameApi = new ItGameApi(
  baseUrl,
  {
    'Content-Type': ['application/json', 'text/plain', '*/*'],
  },
);

export default itGameApi;

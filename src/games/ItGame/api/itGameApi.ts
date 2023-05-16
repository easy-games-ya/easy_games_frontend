import axios from 'axios';
import { baseUrl } from '../utils/constants';
import { IResponseSuccess, IQuestion } from '../utils/types';

class ItGameApi {
  constructor(
    public _baseUrl: string,
    public _headers: { 'Content-Type': string[] },
  ) { }

  getCategories = async (count: number): Promise<[]> => {
    try {
      const response: IResponseSuccess = await axios.get(`${this._baseUrl}/category?count=${count}`, {
        headers: this._headers,
      });
      debugger;
      return response.data as [];
    } catch (err) {
      throw new Error(`Ошибка ${err}`);
    };
  };

  getQuestionById = async (id: string): Promise<IQuestion> => {
    try {
      const response: IResponseSuccess = await axios.get(`${this._baseUrl}/question/${id}/`, {
        headers: this._headers,
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

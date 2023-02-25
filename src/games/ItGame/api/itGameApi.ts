import axios from 'axios';
import { baseUrl } from '../utils/constants';
import { IUserPass, IResponseSuccess, IQuestion } from '../utils/types';

interface ItGameApiArguments {
  _baseUrl: string,
  _headers: { 'Content-Type': string[]; },
}

class ItGameApi {
  _baseUrl: string;
  _headers: { 'Content-Type': string[]; };

  constructor({ _baseUrl, _headers }: ItGameApiArguments ) {
    this._baseUrl = _baseUrl;
    this._headers = _headers;
  };

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
}

const itGameApi = new ItGameApi({
  _baseUrl: baseUrl,
  _headers: {
    'Content-Type': ['application/json', 'text/plain', '*/*'],
  },
});

export default itGameApi;

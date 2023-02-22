import axios from 'axios';
import { baseUrl } from '../utils/constants';
import { IUserPass, IResponseSuccess } from '../utils/types';

const getCards = async (req: IUserPass) => {
  try {
    const response: IResponseSuccess = await axios.get(`${baseUrl}/category/`, {
      headers: {
        'Content-Type': ['application/json', 'text/plain', '*/*'],
      },
      auth: {
        username: req.user,
        password: req.pass,
      },
    });
    return response.data;
  } catch (err) {
    throw new Error(`Ошибка ${err}`);
  };
};

export default getCards;

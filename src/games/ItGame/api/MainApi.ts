import axios from 'axios';
import { baseUrl } from '../utils/constants';
import { IUserPass, IResponseSuccess } from '../utils/types';

const getCards = async (req: IUserPass): Promise<[]> => {
  try {
    const response: IResponseSuccess = await axios.get(`${baseUrl}/category/`, {
      headers: {
        'Content-Type': ['application/json', 'text/plain', '*/*'],
      },
      auth: req,
    });
    return response.data as [];
  } catch (err) {
    throw new Error(`Ошибка ${err}`);
  };
};

export default getCards;

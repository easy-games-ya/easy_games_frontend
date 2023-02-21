import axios from 'axios';
import { baseUrl } from '../utils/constants';

interface IUserPass {
  user: string,
  pass: string,
};

const getCards = async (req: IUserPass) => {
  try {
    const response = await axios.get(`${baseUrl}/category/`, {
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
    console.log(err);
  }
};

export default getCards;

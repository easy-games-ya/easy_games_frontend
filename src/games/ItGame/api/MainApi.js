import axios from 'axios';
import { baseUrl } from '../utils/constants';

const getCards = async (user, pass, fun) => {
  try {
    const response = await axios.get(`${baseUrl}/category/`, {
      headers: {
        'Content-Type': ['application/json', 'text/plain', '*/*'],
      },
      auth: {
        username: user,
        password: pass,
      },
    });
    fun(response.data);
  } catch (err) {
    console.log(err);
  }
};

export default getCards;

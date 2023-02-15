import axios from 'axios';
import { baseUrl, apiHeaders } from '../utils/constants';

const getCards = async (user, pass, fun) => {
  try {
    const response = await axios.get(`${baseUrl}/category/`, {
      headers: apiHeaders,
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

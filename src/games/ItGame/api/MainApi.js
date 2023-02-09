import { baseUrl, apiHeaders } from '../utils/constants';

class MainApi {
  constructor(options) {
    this._baseUrl = options._baseUrl;
    this._headers = options._headers;
  }

  _processTheResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getCategories() { // загрузка категорий
    return fetch(`${this._baseUrl}/category`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic testuser:i113R56qV',
      },
    })
      .then((res) => {
        return this._processTheResponse(res);
      });
  }
}

const mainApi = new MainApi({
  _baseUrl: baseUrl,
  _headers: apiHeaders,
});

export default mainApi;

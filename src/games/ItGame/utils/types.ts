export interface IUserPass {
  username: string,
  password: string,
};

export interface IResponseSuccess {
  config: {},
  data: {},
  headers: {},
  request: {},
  status: number,
  statusText: string,
};

export interface IResponseCard {
  description: string,
  id: string,
  question: string[],
  title: string,
};

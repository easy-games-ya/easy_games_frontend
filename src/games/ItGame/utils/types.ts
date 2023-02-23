export interface IUserPass {
  user: string,
  pass: string,
};

export interface IResponseSuccess {
  config: {},
  data: [],
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

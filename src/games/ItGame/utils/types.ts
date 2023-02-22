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

export interface IRecordCard {
  id: string,
  name: string,
  score: string,
};

export interface IResponseSuccess {
  config: {},
  data: {},
  headers: {},
  request: {},
  status: number,
  statusText: string,
};

export interface ICategoryCard {
  id: number,
  title: string,
  description: string,
};

export interface IResponseCard {
  description: string,
  id: string,
  question: string[],
  title: string,
};

export interface IQuestion {
  id: string,
  question?: string,
  answer: string,
  image?: string,
  category?: string,
  score: number,
};

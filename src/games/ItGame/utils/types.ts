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

export interface IQuestion {
  id: number,
  question: string,
  answer: string,
  image: string | null,
  category: number,
  score: number,
};

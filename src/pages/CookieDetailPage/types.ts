export type CookieInfoType = {
  wallet: string;
  token: string;
};

type HistoryPropertyType = {
  user: string;
  question: string;
  hammer: number;
  time: string;
};

export type HistoryType = {
  update: HistoryPropertyType;
  create: HistoryPropertyType;
  purchase: HistoryPropertyType;
};

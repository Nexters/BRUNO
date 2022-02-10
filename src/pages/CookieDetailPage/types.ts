export type cookieInfoType = {
  wallet: string;
  token: string;
};

type historyPropertyType = {
  user: string;
  question: string;
  hammer: number;
  time: string;
};

export type historyType = {
  update: historyPropertyType;
  create: historyPropertyType;
  purchase: historyPropertyType;
};

export type CommonUseQuery = {
  isLoading: boolean;
  isError: boolean;
};

export type Page = {
  totalCount: number;
  page: number;
  size: number;
};

export enum CookieStatus {
  ACTIVE = 'ACTIVE',
  HIDDEN = 'HIDDEN',
}

export type CookieType = {
  id: number;
  title: string;
  price: number;
  content: string;
  imageUrl: string;
  authorUserId: number;
  ownedUserId: number;
  createdAt: string;
  status: CookieStatus;
  txHash: string;
  nftTokenId: number;
  fromBlockAddress: number;
  categoryId: number;
};

export enum CookieHistoryAction {
  MODIFY = 'MODIFY',
  BUY = 'BUY',
  CREATE = 'CREATE',
}

export type CookieHistory = {
  action: CookieHistoryAction;
  content: string;
  createdAt: string;
};

export type CookieDetail = {
  question: string;
  answer: string;
  collectorName: string;
  creatorName: string;
  contractAddress: string;
  nftTokenId: number;
  viewCount: number;
  price: number;
  histories: CookieHistory[];
  myCookie: boolean;
};

export type UserProfileType = {
  id: number;
  walletAddress: string;
  nickname: string;
  introduction: string;
  profileUrl: string;
  backgroundUrl: string;
  status: 'ACTIVE';
};

export enum UserCookieType {
  COLLECTED = 'COLLECTED',
  COOKIES = 'COOKIES',
}

export type UserCookieList = Page & {
  cookies: CookieType[];
};

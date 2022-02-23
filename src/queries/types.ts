export type CommonUseQuery = {
  isLoading: boolean;
  isError: boolean;
};

export type Page = {
  totalCount: number;
  totalPageIndex: number;
  nowPageIndex: number;
  isLastPage: boolean;
};

export enum CookieStatus {
  ACTIVE = 'ACTIVE',
  HIDDEN = 'HIDDEN',
  DELETED = 'DELETED',
}

export enum CategoryColor {
  PURPLE = 'PURPLE',
  BLUE = 'BLUE',
  PINK = 'PINK',
  LIME = 'LIME',
}

export type Category = {
  id: number;
  name: string;
  color: CategoryColor;
};

export type CookieType = {
  cookieId: number;
  title: string;
  price: number;
  content: string;
  category: Category;
  imageUrl: string;
  authorUserId: number;
  ownedUserId: number;
  createdAt: string;
  status: CookieStatus;
  txHash?: string;
  nftTokenId: number;
  fromBlockAddress?: number;
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

export type CookieFeedItem = {
  cookieId: number;
  question: string;
  answer: string;
  cookieImageUrl: string;
  creatorId: number;
  creatorProfileUrl: string;
  creatorName: string;
  contractAddress: string;
  nftTokenId: number;
  viewCount: number;
  price: number;
  createdAt: string;
  myCookie: boolean;
};

export type CookieFeed = {
  contents: CookieFeedItem[];
  isLastPage: boolean;
  nowPageIndex: number;
  totalPageIndex: number;
};

export type CookieDetail = {
  cookieId: number;
  question: string;
  answer?: string;
  collectorId: number;
  collectorName: string;
  collectorProfileUrl?: string;
  creatorId: number;
  creatorName: string;
  creatorProfileUrl?: string;
  contractAddress: string;
  nftTokenId: number;
  viewCount: number;
  price: number;
  histories: CookieHistory[];
  myCookie: boolean;
  category: Category;
  cookieStatus: CookieStatus;
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
  OWNED = 'OWNED',
  AUTHOR = 'AUTHOR',
}

export type UserCookieList = Page & {
  contents: CookieType[];
};

export enum AskStatus {
  PENDING = 'PENDING',
  IGNORED = 'IGNORED',
  ACCEPTED = 'ACCEPTED',
  DELETED = 'DELETED',
}

export type Ask = {
  id: number;
  title: string;
  status: AskStatus;
  senderUserId: number;
  receiverUserId: number;
};

export type UserAsk = Page & {
  contents: Ask[];
};

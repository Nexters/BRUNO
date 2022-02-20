export type CommonUseQuery = {
  isLoading: boolean;
  isError: boolean;
};

export type CookieType = {
  id: number;
  title: string;
  price: number;
  content: string;
  imageUrl: string;
  authorUserId: number;
  ownedUserId: number;
  createdAt: string;
  status: 'ACTIVE' | 'HIDDEN';
  txHash: string;
  nftTokenId: number;
  fromBlockAddress: number;
  categoryId: number;
};

export type CookieHistory = {
  action: 'CREATE' | 'MODIFY';
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

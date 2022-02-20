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

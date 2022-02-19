export type FeedProps = {
  id: number;
  question: string;
  viewCount: number;
  hammer: number;
};

export type UserType = {
  userId: number;
  profile: string | null;
  name: string;
  createdAt: string;
};

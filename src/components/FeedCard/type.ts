export type FeedProps = {
  id: number;
  question: string;
  viewCount: number;
  hammer: number;
};

export type UserType = {
  profile: string | null;
  name: string;
  createdAt: string;
};

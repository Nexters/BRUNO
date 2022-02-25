import { atom } from 'recoil';

type User = {
  userId: number | null;
  finishOnboard: boolean;
};
export const userAtom = atom<User>({
  key: 'user/userAtom',
  default: {
    userId: 50,
    finishOnboard: false,
  },
});

import { atom } from 'recoil';

export const userAtom = atom<number | null>({
  key: 'user/userAtom',
  default: null,
});

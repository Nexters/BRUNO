import { atom } from 'recoil';
import { UserProfileType } from '@src/queries/types';

export const userInfoAtom = atom<UserProfileType>({
  key: 'user/userInfoAtom',
  default: {
    id: 0,
    walletAddress: '',
    nickname: '',
    introduction: '',
    profileUrl: '',
    backgroundUrl: '',
    status: 'ACTIVE',
    finishOnboard: true,
  },
});

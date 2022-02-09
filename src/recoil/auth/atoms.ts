import { atom } from 'recoil';

export const klipAuthAtom = atom({
  key: 'auth/klipAuthAtom',
  default: {
    requestKey: '',
    expirationTime: null,
  },
});

export const klipAddressAtom = atom({
  key: 'auth/klipAddressAtom',
  default: {
    address: null,
  },
});

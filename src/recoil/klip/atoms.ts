import { atom } from 'recoil';

export const klipRequestKeyAtom = atom({
  key: 'klip/requestKeyAtom',
  default: {
    requestKey: '',
    expirationTime: null,
  },
});

export const klipAddressAtom = atom({
  key: 'klip/addressAtom',
  default: {
    address: null,
  },
});

import { selector } from 'recoil';
import { klipAuthAtom } from './atoms';

export const getKlipQrcodeSelector = selector({
  key: 'auth/getKlipQrcode',
  get: ({ get }) =>
    `https://klipwallet.com/?target=/a2a?request_key=${
      get(klipAuthAtom).requestKey
    }`,
});

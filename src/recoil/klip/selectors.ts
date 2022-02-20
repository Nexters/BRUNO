import { selector } from 'recoil';
import { klipRequestKeyAtom } from './atoms';

export const getKlipQrcodeSelector = selector({
  key: 'auth/getKlipQrcode',
  get: ({ get }) =>
    `https://klipwallet.com/?target=/a2a?request_key=${
      get(klipRequestKeyAtom).requestKey
    }`,
});

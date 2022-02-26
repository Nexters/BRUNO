import { atom } from 'recoil';

export const QRcodeModalAtom = atom({
  key: 'ui/qrcodeModalAtom',
  default: false,
});

export const unimplementedModalAtom = atom({
  key: 'ui/unimplementedModalAtom',
  default: '',
});

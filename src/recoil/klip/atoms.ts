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

export enum ContractError {
  NONE = 'NONE',
  INSUFFICIENT_HAMMER = 'INSUFFICIENT_HAMMER',
}

export const contractErrorAtom = atom<ContractError>({
  key: 'klip/contractErrorAtom',
  default: ContractError.NONE,
});

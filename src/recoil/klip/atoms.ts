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
  APPROVAL_ERROR = 'APPROVAL_ERROR',
  SERVER_ERROR = 'SERVER_ERROR',
  REQUEST_FAIL = 'REQUEST_FAIL',
}

export const contractErrorAtom = atom<ContractError>({
  key: 'klip/contractErrorAtom',
  default: ContractError.NONE,
});

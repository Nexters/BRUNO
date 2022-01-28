import { LoginFormType } from './type';

export const LOGIN_FORM_TEXT_MAP = {
  [LoginFormType.OTHER_WALLET]: {
    title: 'Input\n Your Wallet Address',
    inputLabel: 'Wallet Adress',
    placeholder: '0x...',
    button: 'Connet With My Wallet',
  },
  [LoginFormType.KLIP]: {
    title: 'Input\n Your Wallet Address',
    inputLabel: 'Wallet Adress',
    placeholder: '0x...',
    button: 'Regist ID',
  },
};

import { LoginType } from './type';

export const LOGIN_FORM_TEXT_MAP = {
  [LoginType.OTHER_WALLET]: {
    title: 'Input\nYour Wallet Address',
    inputLabel: 'Wallet Address',
    placeholder: '0x...',
    button: 'Connect With My Wallet',
    guide: 'How To Connect My Wallet',
  },
  [LoginType.KLIP]: {
    title: 'Input\nYour Profile ID',
    inputLabel: 'Profile ID',
    placeholder: 'Input Your Profile ID',
    button: 'Regist ID',
    guide: 'Once selected ID can not be changed anymore.',
  },
};

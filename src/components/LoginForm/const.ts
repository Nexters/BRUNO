import { LoginFormType } from './type';

export const LOGIN_FORM_TEXT_MAP = {
  [LoginFormType.OTHER_WALLET]: {
    title: 'Your Wallet Address',
    inputLabel: 'Wallet Address',
    placeholder: '0x...',
    button: 'Connect With My Wallet',
    guide: 'How To Connect My Wallet',
  },
  [LoginFormType.KLIP]: {
    title: 'Your Profile ID',
    inputLabel: 'Profile ID',
    placeholder: 'Input Your Profile ID',
    button: 'Regist ID',
    guide: 'Once selected ID can not be changed anymore.',
  },
};

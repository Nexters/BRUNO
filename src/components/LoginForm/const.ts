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
    title: '프로필로 등록할\n아이디를 입력해주세요.',
    inputLabel: '유저 아이디',
    placeholder: '프로필 아이디를 입력해주세요.',
    button: '아이디 등록하기',
    guide: '한 번 입력한 아이디는 바꿀 수 없어요.',
  },
};

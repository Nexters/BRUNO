import { LoginType } from './type';

export const REGIST_TEXT_MAP = {
  [LoginType.OTHER_WALLET]: {
    title: 'Input\nYour Wallet Address',
    inputLabel: 'Wallet Address',
    placeholder: '0x...',
    button: 'Connect With My Wallet',
    guide: 'How To Connect My Wallet',
  },
  [LoginType.KLIP]: {
    title: '사용할 닉네임을\n입력해주세요.',
    inputLabel: '닉네임',
    placeholder: '닉네임을 입력해주세요.',
    button: '닉네임 등록하기',
    guide: '한 번 지정한 닉네임은 변경 할 수 없습니다.',
  },
};

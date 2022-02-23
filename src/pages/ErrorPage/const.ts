import { ErrorPageType } from './types';

export const ERROR_TEXT = {
  [ErrorPageType.NOT_FOUND]: {
    title: '이런.. 길을 잃어버린 것 같아요..',
    text: '여기엔 당신과 저 말고는\n아무도 없는 것 같네요.',
  },
  [ErrorPageType.FORBIDDEN]: {
    title: '쿠키가 사라진 것 같아요..',
    text: '쿠키를 찾을 동안에\n다른 쿠키를 구경해보시는건 어때요?',
  },
  [ErrorPageType.SERVER_ERROR]: {
    title: '쿠키팡에 문제가 생겼나봐요..!',
    text: '서비스에 문제가 있어 해결하고 있어요.\n잠시만 기다려주세요.',
  },
};

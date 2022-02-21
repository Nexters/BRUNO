import { Stage } from '@src/klip';
import { ModalLabel } from '@src/components/shared/Modal';

export const TEXT_MAP = {
  question: '질문',
  questionPlaceholder: '질문을 입력해주세요.',
  answer: '답변',
  answerPlaceholder: '답변을 입력해주세요.',
  answerInfo: '이 부분이 쿠키로 바뀔 예정입니다.',
  cost: '망치 무게',
  category: '카테고리',
  request: '권한 요청하기',
  makeCookie: '쿠키 굽기',
  editCookie: '가격 수정하기',
};

export const MODAL_LABEL_MAP: { [key in string]: ModalLabel } = {
  [Stage.RESULT]: {
    title: '쿠키가 성공적으로 만들어졌습니다',
    description: '답변이 안전하게 쿠키 안에 보관되었습니다.',
    yes: '확인하러 가기',
    no: '피드로 돌아가기',
  },
  [Stage.REQUEST_FAIL]: {
    title: '쿠키 굽기를 실패했습니다.',
    description: '쿠키 정상적으로 굽지 못했습니다.\n다시 시도해주세요.',
    yes: '다시 시도하기',
    no: '피드로 돌아가기',
  },
};

export const ANSWER_LIMIT = 50;

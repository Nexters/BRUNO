import { ModalLabel } from '../shared/Modal';

export enum DetailModalState {
  DELETE = 'DELETE',
  BUY = 'BUY',
  NONE = 'NONE',
}

export const DETAIL_MODAL_LABEL = (price: number): { [key in string]: ModalLabel } => ({
  [DetailModalState.DELETE]: {
    title: '정말 삭제하시겠어요?',
    description: '쿠키를 삭제하면 다시 복구하기 어려워요.',
    yes: '삭제하기',
    no: '취소하기',
  },
  [DetailModalState.BUY]: {
    title: '이 쿠키를 구매하시겠어요?',
    description: `로열티가 포함된 망치 ${price}톤으로\n쿠키의 답변을 열 수 있어요.`,
    yes: '구매하기',
    no: '취소하기',
  },
});

import { ContractError } from '@src/recoil/klip';
import { ModalLabel } from '../shared/Modal';

export enum DetailModalState {
  DELETE = 'DELETE',
  BUY = 'BUY',
  BUY_PREPARE = 'BUY_PREPARE',
  BUY_REQUEST = 'BUY_REQUEST',
  BUY_RESULT = 'BUY_RESULT',
  NONE = 'NONE',
}

export enum DetailErrorState {
  INSUFFICIENT_HAMMER = 'INSUFFICIENT_HAMMER',
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
  [DetailModalState.BUY_RESULT]: {
    title: '쿠키가 성공적으로 구매되었습니다.',
    description: '구매한 쿠키의 답변을 확인하시겠어요?',
    yes: '확인하러 가기',
  },
});

export const ERROR_MODAL_LABEL: { [key in string]: ModalLabel } = {
  [ContractError.INSUFFICIENT_HAMMER]: {
    title: '쿠키를 구매할 수 없습니다.',
    description: '망치가 부족해 쿠키를 구매할 수 없어요.\n망치를 구매하고 다시 시도해주세요.',
    yes: '망치 구매하기',
    no: '피드로 돌아가기',
  },
  [ContractError.REQUEST_FAIL]: {
    title: '쿠키를 구매하는 데 실패했습니다.',
    description: '권한을 얻지 못했습니다.\n다시 시도해주세요.',
    yes: '다시 시도하기',
    no: '피드로 돌아가기',
  },
  [ContractError.APPROVAL_ERROR]: {
    title: '쿠키 구매하는 데 실패했습니다.',
    description: '지갑 권한이 없습니다.\n설정 페이지에서 지갑 권한을 얻을 수 있어요.',
    yes: '다시 시도하기',
    no: '피드로 돌아가기',
  },
  [ContractError.SERVER_ERROR]: {
    title: '쿠키 구매하는 데 실패했습니다.',
    description: '서버에 문제가 생겨 쿠키를 구매하지 못했어요.',
    yes: '다시 시도하기',
    no: '피드로 돌아가기',
  },
};

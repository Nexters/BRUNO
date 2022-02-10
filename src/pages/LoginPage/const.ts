import { ModalLabel } from '@src/components/shared/Modal';
import { LoginStage } from './types';

export const LOGIN_MODAL_LABEL: { [key in string]: ModalLabel } = {
  [LoginStage.REQUEST]: {
    title: '연동을 완료하셨나요?',
    description: '지갑의 연결을 확인하기 위해\n‘연동 완료’ 버튼을 눌러주세요.',
    yes: '연동 완료',
    no: '연동 재시도',
  },
  [LoginStage.REQUEST_FAIL]: {
    title: '지갑 연동을 실패했어요.',
    description:
      '지갑 연동에 알 수 없는 문제가 발생했어요.\n연동을 다시 시도해주세요.',
    yes: '다시 시도하기',
    no: '그만두기',
  },
};

import { ModalLabel } from '@src/components/shared/Modal';

export enum ApprovalStage {
  INITIAL = 'INITIAL',
  PREPARE = 'PREPARE',
  REQUEST = 'REQUEST',
  REQUEST_FAIL = 'REQUEST_FAIL',
  SUCCESS = 'SUCCESS',
  ALREADY_SUCCESS = 'ALREADY_SUCCESS',
}

export const MODAL_LABEL_MAP: { [key in string]: ModalLabel } = {
  [ApprovalStage.SUCCESS]: {
    title: '권한 설정이 완료되었습니다.',
    description: '자유롭게 쿠키를 사고 팔아 보세요.',
    yes: '닫기',
  },
  [ApprovalStage.REQUEST_FAIL]: {
    title: '권한 설정이 실패했습니다.',
    description: '권한 허가가 완료되지 못했어요.\n다시 시도해주세요.',
    yes: '재시도하기',
    no: '취소하기',
  },
};

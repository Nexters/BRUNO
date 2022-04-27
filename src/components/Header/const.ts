export enum HeaderPage {
  ASK = 'ask',
  MAIN = 'main',
  JOIN = 'join',
  TUTORIAL = 'tutorial',
  SETTING = 'setting',
  EDIT = 'edit',
  NOTIFICATION = 'notification',
}

type HeaderValues = {
  [key in string]: {
    left?: boolean; // backbutton
    center: string; // headerTitle
    right?: boolean; // closebutton
  };
};
export const HEADER_VALUES: HeaderValues = {
  [HeaderPage.ASK]: {
    left: true,
    center: '질문',
  },
  [HeaderPage.JOIN]: {
    left: true,
    center: '',
  },
  [HeaderPage.TUTORIAL]: {
    left: true,
    center: '',
    right: true,
  },
  [HeaderPage.SETTING]: {
    left: true,
    center: '설정',
    right: true,
  },
  [HeaderPage.EDIT]: {
    left: true,
    center: '프로필 변경',
  },
  [HeaderPage.NOTIFICATION]: {
    left: true,
    center: '알림',
    right: true,
  },
};

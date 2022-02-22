export enum HeaderPage {
  ASK = 'ask',
  MAIN = 'main',
  JOIN = 'join',
  TUTORIAL = 'tutorial',
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
    center: 'Ask',
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
};

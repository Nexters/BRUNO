export enum HeaderPage {
  ASK = 'ask',
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
};

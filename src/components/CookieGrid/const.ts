import { CategoryColor } from '@src/queries/types';
import {
  PinkBox,
  PurpleBox,
  BlueBox,
  LimeBox,
  BlueClose,
  LimeClose,
  PinkClose,
  PurpleClose,
  BlueCookie,
  PinkCookie,
  LimeCookie,
  PurpleCookie,
} from '@src/assets/Icon';

export const BOX_COLOR_MAP = {
  [CategoryColor.BLUE]: BlueBox,
  [CategoryColor.PINK]: PinkBox,
  [CategoryColor.PURPLE]: PurpleBox,
  [CategoryColor.LIME]: LimeBox,
};

export const ACTIVE_COLOR_MAP = {
  [CategoryColor.BLUE]: BlueCookie,
  [CategoryColor.PINK]: PinkCookie,
  [CategoryColor.PURPLE]: PurpleCookie,
  [CategoryColor.LIME]: LimeCookie,
};

export const HIDDEN_COLOR_MAP = {
  [CategoryColor.BLUE]: BlueClose,
  [CategoryColor.PINK]: PinkClose,
  [CategoryColor.PURPLE]: PurpleClose,
  [CategoryColor.LIME]: LimeClose,
};

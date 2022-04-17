import {
  CookieClosedBlue,
  CookieClosedLime,
  CookieClosedPink,
  CookieClosedPurple,
  CookieOpenBlue,
  CookieOpenLime,
  CookieOpenPink,
  CookieOpenPurple,
} from '@src/assets/images';
import { CategoryColor } from '@src/queries/types';

export const ACTIVE_COLOR_MAP = {
  [CategoryColor.BLUE]: CookieOpenBlue,
  [CategoryColor.PINK]: CookieOpenPink,
  [CategoryColor.PURPLE]: CookieOpenPurple,
  [CategoryColor.LIME]: CookieOpenLime,
};

export const HIDDEN_COLOR_MAP = {
  [CategoryColor.BLUE]: CookieClosedBlue,
  [CategoryColor.PINK]: CookieClosedPink,
  [CategoryColor.PURPLE]: CookieClosedPurple,
  [CategoryColor.LIME]: CookieClosedLime,
};

import { CategoryColor } from '@src/recoil/category';
import { theme } from '@src/assets/styles';

export const CATEGORY_COLOR_MAP = {
  [CategoryColor.BLUE]: theme.colors.brand.sub01,
  [CategoryColor.RED]: theme.colors.brand.sub01,
  [CategoryColor.PINK]: theme.colors.brand.sub02,
  [CategoryColor.PURPLE]: theme.colors.brand.sub03,
  [CategoryColor.LIME]: theme.colors.brand.sub04,
};

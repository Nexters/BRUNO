import { atom } from 'recoil';
import { Category } from '@src/queries/types';

export const categoryListAtom = atom<Category[]>({
  key: 'category/list',
  default: [],
});

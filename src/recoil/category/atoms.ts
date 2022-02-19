import { atom } from 'recoil';
import { Category } from './types';

export const categoryListAtom = atom<Category[]>({
  key: 'category/list',
  default: [],
});

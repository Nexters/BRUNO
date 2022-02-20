import { selector } from 'recoil';
import { getCategoryist } from '@src/queries/categories';
import { Category } from './types';

export const categoryListSelector = selector<Category[]>({
  key: 'category/listSelector',
  get: async () => {
    const { data: categories } = await getCategoryist();
    if (categories) return categories;
    return [];
  },
});

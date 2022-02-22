import { selector, selectorFamily } from 'recoil';
import { getCategoryist } from '@src/queries/categories';
import { Category, CategoryColor } from '@src/queries/types';

export const categoryListSelector = selector<Category[]>({
  key: 'category/listSelector',
  get: async () => {
    try {
      const { data: categories } = await getCategoryist();
      if (categories) return categories;
      return [];
    } catch {
      return [];
    }
  },
});

// 카테고리 목록에서 특정 카테고리만 가져오는 셀렉터
export const categorySelector = selectorFamily<Category | null, number>({
  key: 'category/selector',
  get:
    (categoryId: number) =>
    async ({ get }) => {
      const categories = await get(categoryListSelector);
      return categories.find((item) => item.id === categoryId) || null;
    },
});

export const categoryValueSelector = selectorFamily<string | null, number>({
  key: 'categoryValue/selector',
  get:
    (categoryId: number) =>
    async ({ get }) => {
      const categories = await get(categoryListSelector);
      const category = categories.find((item) => item.id === categoryId) || null;
      return category?.name || '';
    },
});

export const categoryColorSelector = selectorFamily<CategoryColor | null, number>({
  key: 'categoryColor/selector',
  get:
    (categoryId: number) =>
    async ({ get }) => {
      const categories = await get(categoryListSelector);
      const color = categories.find((item) => item.id === categoryId)?.color;
      return color ?? CategoryColor.BLUE;
    },
});

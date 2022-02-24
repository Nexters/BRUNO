import axios from 'axios';
import { getErrorStatus } from './utils';

export const getCategoryist = () => axios.get('/categories');

export type PostUserCategoryArgs = {
  userId: number;
  categoryIdList: number[];
};
export const postUserCategory = async ({ userId, categoryIdList }: PostUserCategoryArgs) => {
  try {
    const { status: resultStatus } = await axios.post(`/users/${userId}/categories`, { categoryIdList });
    if (resultStatus === 200) return true;
    return false;
  } catch (error) {
    getErrorStatus(error);
  }
};

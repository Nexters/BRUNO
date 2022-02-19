import axios from 'axios';
import config from '@src/config';
import { useInfiniteQuery } from 'react-query';

import { isSuccess } from './utils';

export const getCookieList = (page?: number) =>
  axios.get(`${config.baseApiUrl}/categories/all/cookies`, {
    params: {
      page: page ?? 0,
      size: 5,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const postCookie = async ({ title, contents, hammer, txHash }: any) => {
  try {
    const { data: cookieData, status } = await axios.post(
      `${config.baseApiUrl}/cookies`,
      {
        question: title,
        answer: contents,
        price: hammer,
        authorUserId: 1,
        ownedUserId: 1,
        txHash,
        categoryId: 1,
      },
    );
    if (isSuccess(status)) {
      return cookieData;
    }
    return false;
  } catch {
    return false; // request 실패
  }
};

export const getCookieListByCategory = async (
  categoryId: string,
  page: number,
) =>
  axios.get(`${config.baseApiUrl}/categories/${categoryId}/cookies`, {
    params: {
      page,
      size: 5,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const useGetAllCookies = () => {
  const { data } = useInfiniteQuery(
    ['categories', 'all', 'cookies'],
    ({ pageParam }) => getCookieList(pageParam),
  );
};

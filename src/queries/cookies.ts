import axios from 'axios';
import config from '@src/config';
import { useQuery } from 'react-query';

import { CookieInfo } from '@src/pages/CreateCookiePage';
import { isSuccess } from './utils';
import { CommonUseQuery, CookieType } from './types';

export const getCookieList = (page?: number) =>
  axios.get(`${config.baseApiUrl}/categories/all/cookies`, {
    params: {
      page: page ?? 0,
      size: 10,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });

type PostCookieArgs = CookieInfo & { txHash: string };

export const postCookie = async ({ title, contents, hammer, txHash }: PostCookieArgs) => {
  try {
    const { data: cookieData, status } = await axios.post(`${config.baseApiUrl}/cookies`, {
      question: title,
      answer: contents,
      price: hammer,
      authorUserId: 1,
      ownedUserId: 1,
      txHash,
      categoryId: 1,
    });
    if (isSuccess(status)) {
      return cookieData;
    }
    return false;
  } catch {
    return false; // request 실패
  }
};

export const getCookieListByCategory = async (categoryId: string, page: number) =>
  axios.get(`${config.baseApiUrl}/categories/${categoryId}/cookies`, {
    params: {
      page: page ?? 0,
      size: 5,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });

type UseGetAllCookie = CommonUseQuery & {
  cookieList: CookieType[];
};

export const useGetAllCookies = (): UseGetAllCookie => {
  const { data, isLoading, isError } = useQuery(['categories', 'all', 'cookies'], () => getCookieList(0));

  return { cookieList: data?.data ?? [], isLoading, isError };
};

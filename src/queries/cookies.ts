import axios from 'axios';

import { CookieInfo } from '@src/pages/CreateCookiePage';
import { getErrorStatus } from './utils';
import { UserCookieType } from './types';

export const getCookieList = (page?: number) =>
  axios.get('/categories/all/cookies', {
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
    const { data: cookieData } = await axios.post('/cookies', {
      question: title,
      answer: contents,
      price: hammer,
      authorUserId: 1,
      ownedUserId: 1,
      txHash,
      categoryId: 1,
    });
    return cookieData;
  } catch {
    return false; // request 실패
  }
};

type GetCookieArgs = { userId: number; cookieId: number };

export const getCookieDetail = async ({ userId, cookieId }: GetCookieArgs) => {
  try {
    const { data: cookieData } = await axios.get(`/users/${userId}/cookies/${cookieId}/detail`);
    return cookieData;
  } catch (error) {
    // TODO : 나중에 status에 따라 error page 보여주어야
    getErrorStatus(error);
  }
};

export const getCookieListByCategory = async (categoryId: string, page: number) =>
  axios.get(`/categories/${categoryId}/cookies`, {
    params: {
      page: page ?? 0,
      size: 5,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });

type GetUserCookiesArgs = { userId: string; page?: number; size?: number; target: UserCookieType };

export const getUserCookies = async ({ userId, page, size, target }: GetUserCookiesArgs) => {
  try {
    const { data: userCookieData } = await axios.get(`/users/${userId}/cookies`, {
      params: {
        page: page ?? 0,
        size: size ?? 20,
        target,
      },
    });
    return userCookieData;
  } catch (error) {
    getErrorStatus(error);
  }
};

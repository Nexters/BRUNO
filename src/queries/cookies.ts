import axios from 'axios';

import { CookieInfo } from '@src/pages/CreateCookiePage';
import { getErrorStatus } from './utils';
import { CookieStatus, UserCookieType } from './types';

type GetCookieListArgs = { userId: number; page?: number };

export const getCookieList = async ({ page, userId }: GetCookieListArgs) => {
  try {
    const { data: cookieData } = await axios.get(`/users/${userId}/categories/all/cookies`, {
      params: {
        page: page ?? 0,
        size: 10,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return cookieData;
  } catch {
    return false;
  }
};

type PostCookieArgs = CookieInfo & { txHash: string; authorUserId: number };

export const postCookie = async ({ title, contents, hammer, txHash, category, authorUserId }: PostCookieArgs) => {
  try {
    const { data: cookieData } = await axios.post('/cookies', {
      question: title,
      answer: contents,
      price: hammer,
      authorUserId,
      ownedUserId: authorUserId,
      txHash,
      categoryId: category,
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
    const status = getErrorStatus(error);
    throw status;
  }
};

export const getCookieListByCategory = async ({
  categoryId,
  userId,
  page,
}: GetCookieListArgs & { categoryId: string }) => {
  try {
    const { data: cookieData } = await axios.get(`/users/${userId}/categories/${categoryId}/cookies`, {
      params: {
        page: page ?? 0,
        size: 20,
      },
    });
    return cookieData;
  } catch (error) {
    getErrorStatus(error);
  }
};

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

export const deleteCookie = async (cookieId: number | string) => {
  try {
    const { status } = await axios.delete(`/cookies/${cookieId}`);
    return status;
  } catch (error) {
    throw getErrorStatus(error);
  }
};

export type UpdateCookieStatusArgs = { cookieId: number; status: CookieStatus };

export const updateCookieStatus = async ({ cookieId, status }: UpdateCookieStatusArgs) => {
  try {
    const { status: resultStatus } = await axios.put(`/cookies/${cookieId}`, null, {
      params: {
        status,
      },
    });
    return resultStatus;
  } catch (error) {
    throw getErrorStatus(error);
  }
};

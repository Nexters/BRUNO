import axios from 'axios';
import { getErrorStatus } from './utils';

export type PostUserArgs = {
  walletAddress: string;
  nickname: string;
};

export const postUser = async (obj: PostUserArgs) => {
  try {
    const { status: resultStatus, data } = await axios.post('/users', obj);
    if (resultStatus === 201) return data;
    return false;
  } catch (error) {
    getErrorStatus(error);
  }
};

export const getUser = async (userId: string) => {
  if (!userId) return false;
  try {
    const { data: userData } = await axios.get(`/users/${userId}`);
    return userData;
  } catch (error) {
    getErrorStatus(error);
  }
};

export type GetUserAskArgs = { userId: string | number; page?: number };

export const getUserAsk = async ({ userId, page }: GetUserAskArgs) => {
  try {
    const { data: askData } = await axios.get(`/users/${userId}/asks`, {
      params: { target: 'RECEIVER', page: page ?? 0, size: 3 },
    });
    return askData;
  } catch (error) {
    getErrorStatus(error);
  }
};

export const checkJoin = async (walletAddress: string) => {
  try {
    const { data } = await axios.post('/login', { walletAddress });
    return data?.userId;
  } catch {
    return null;
  }
};

export const checkOnboard = async (userId: number) => {
  try {
    const { data } = await axios.get(`/users/${userId}/onboard`);
    return data?.isFinish;
  } catch {
    return false;
  }
};

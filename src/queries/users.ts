import axios from 'axios';
import { getErrorStatus } from './utils';

export const getUser = async (userId: string) => {
  try {
    const { data: userData } = await axios.get(`/users/${userId}`);
    return userData;
  } catch (error) {
    getErrorStatus(error);
  }
};

export const getUserAsk = async (userId: string) => {
  try {
    const { data: askData } = await axios.get(`/users/${userId}/asks`, { params: { target: 'RECEIVER' } });
    return askData;
  } catch (error) {
    getErrorStatus(error);
  }
};

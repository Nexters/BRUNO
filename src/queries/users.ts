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

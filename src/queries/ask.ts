import axios from 'axios';
import { getErrorStatus } from './utils';
import { AskStatus } from './types';

export const updateAskStatus = async (askId: number, status: AskStatus) => {
  try {
    const { status: resultStatus } = await axios.put(`/asks/${askId}`, { status });
    if (resultStatus === 200) return true;
    return false;
  } catch (error) {
    getErrorStatus(error);
    return false;
  }
};

export type PostAskArgs = { title: string; senderId: number | string; receiverId: number | string };

export const postAsk = async ({ title, senderId, receiverId }: PostAskArgs) => {
  try {
    const { status: resultStatus } = await axios.post('/asks', { title, senderId, receiverId });
    if (resultStatus === 200) return true;
    return false;
  } catch (error) {
    getErrorStatus(error);
    return false;
  }
};

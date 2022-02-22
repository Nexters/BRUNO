import axios from 'axios';
import { getErrorStatus } from './utils';
import { AskStatus } from './types';

export const updateAskStatus = async (askId: number, status: AskStatus) => {
  try {
    const { status: resultStatus } = await axios.put(`/asks/${askId}`, null, { params: { status } });
    if (resultStatus === 200) return true;
    return false;
  } catch (error) {
    getErrorStatus(error);
    return false;
  }
};

export type PostAskArgs = { title: string; senderUserId: number | string; receiverUserId: number | string };

export const postAsk = async ({ title, senderUserId, receiverUserId }: PostAskArgs) => {
  try {
    const { status: resultStatus } = await axios.post('/asks', { title, senderUserId, receiverUserId });
    if (resultStatus === 200) return true;
    return false;
  } catch (error) {
    getErrorStatus(error);
    return false;
  }
};

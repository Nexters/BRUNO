import { selectorFamily } from 'recoil';
import { getUserHammer, getUserKlay } from '@src/klip/axios';

export const userBalanceSelector = selectorFamily<{ hammer: number; klay: number }, number>({
  key: 'balance/userSelector',
  get: (userId: number) => async () => {
    try {
      const hammer = (await getUserHammer(userId)) || 0;
      const klay = (await getUserKlay(userId)) || 0;
      return { hammer, klay };
    } catch {
      return { hammer: 0, klay: 0 };
    }
  },
});

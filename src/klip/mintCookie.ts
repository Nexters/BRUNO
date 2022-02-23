import { ContractError } from '@src/recoil/klip';
import { getCookieFee, getUserHammer } from './axios';

export const isAvailableCreating = async (userId: string | number, setError: (err: ContractError) => void) => {
  const fee = await getCookieFee();
  const userHammer = await getUserHammer(userId);

  if (!userHammer || fee > userHammer) {
    setError(ContractError.INSUFFICIENT_HAMMER);
    return false;
  }
  return true;
};

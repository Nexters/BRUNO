import { ContractError } from '@src/recoil/klip';
import { getApproval, getCookiePrice, getUserHammer } from './axios';

export const getBuyCookieParams = ({ nftTokenId }: { nftTokenId: number }) => `["${nftTokenId}"]`;

export const isAvailableBuying = async (
  { userId, nftTokenId }: { userId: string | number; nftTokenId: number },
  setError: (err: ContractError) => void,
) => {
  const approval = await getApproval(userId);

  if (!approval) {
    setError(ContractError.APPROVAL_ERROR);
    return false;
  }
  const price = await getCookiePrice(nftTokenId);
  const userHammer = await getUserHammer(userId);

  if (!price) {
    setError(ContractError.SERVER_ERROR);
    return false;
  }

  if (!userHammer || price > userHammer) {
    setError(ContractError.INSUFFICIENT_HAMMER);
    return false;
  }
  return true;
};

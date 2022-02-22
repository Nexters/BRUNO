import { CookieInfo } from '@src/pages/CreateCookiePage';
import { ContractError } from '@src/recoil/klip';
import { getApproval, getCookieFee, getUserHammer } from './axios';

export const getMintCookieParams = (data: CookieInfo & { categoryImage: string }) => {
  const { title, contents, category, hammer, categoryImage } = data;
  return `["${title}","${contents}","${categoryImage}","${category}",${hammer}]`;
};

export const isAvailableCreating = async (userId: string | number, setError: (err: ContractError) => void) => {
  const approval = await getApproval(userId);

  if (!approval) {
    setError(ContractError.APPROVAL_ERROR);
    return false;
  }
  const fee = await getCookieFee();
  const userHammer = await getUserHammer(userId);

  if (!userHammer || fee > userHammer) {
    setError(ContractError.INSUFFICIENT_HAMMER);
    return false;
  }
  return true;
};

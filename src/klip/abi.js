import cookieAbi from '@src/assets/abi/cookieABI';
import hammerAbi from '@src/assets/abi/hammerABI';
import { CookieMethod, HammerMethod } from './types';

export const getAbiString = async (funcName, isHammerContract) => {
  const abi = isHammerContract ? hammerAbi : cookieAbi;
  const targetAbi = abi.find((abi) => abi.name === funcName);
  console.log(abi, funcName, targetAbi);
  if (!targetAbi) return null;
  return JSON.stringify(targetAbi);
};

export const isHammerContractMethod = (methodName) => Object.values(HammerMethod).includes(methodName);

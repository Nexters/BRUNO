import cookieAbi from '@src/assets/abi/cookieABI';
import hammerAbi from '@src/assets/abi/hammerABI';

export const getAbiString = async (funcName, isHammerContract) => {
  const abi = isHammerContract ? hammerAbi : cookieAbi;
  const targetAbi = abi.find((abi) => abi.name === funcName);
  if (!targetAbi) return null;
  return JSON.stringify(targetAbi);
};

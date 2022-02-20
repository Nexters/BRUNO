import cookieAbi from '@src/assets/abi/cookie';

export const getAbiString = async (funcName) => {
  const targetAbi = cookieAbi.find((abi) => abi.name === funcName);
  if (!targetAbi) return null;
  return JSON.stringify(targetAbi);
};

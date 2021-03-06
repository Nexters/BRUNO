import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { prepare, getResult } from 'klip-sdk';

import { ContractError, contractErrorAtom, klipRequestKeyAtom } from '@src/recoil/klip';
import { getAbiString, isHammerContractMethod } from './abi';
import { openDeepLink as _openDeepLink } from './utils';
import { CookieMethod } from './types';
import { getMintCookieParams, isAvailableCreating } from './mintCookie';
import { getBuyCookieParams, isAvailableBuying } from './buyCookie';

const bappName = 'COOKIEPANG';
// const successLink = '';
// const failLink = '';

/**
 * 사용자가 특정 컨트랙트의 함수를 실행하도록 하는 요청
 * @see https://docs.klipwallet.com/a2a-sdk/a2a-sdk-js#prepare.executecontract
 * @params {string} bappName - 사용자에게 표시 될 BApp의 이름
 * @params {string} to - contract 주소
 * @params {string} value - 컨트랙트 실행하면서 같이 보낼 KLAY 수량 (단위: peb)
 * @params {string} abi - 실행할 함수의 abi
 * @params {string} params - 실행할 함수의 인자 목록
 * @params {string} from - 사용자의 Klip 계정 주소가 from 주소와 일치하는 경우만 진행 (optional)
 * @params {string} successLink - 사용자 동의과정 완료 후 돌아올 링크 (optional)
 * @params {string} failLink - 사용자 동의과정에서 문제가 발생 할 경우 돌아올 링크 (optional)
 */

const COOKIE_CONTRACT_ADDR = '0x5F5E5a5744f697DB61e206B79ABc6C0455BeF54f';
const HAMMER_CONTRACT_ADDR = '0x991f2A245Ff1C04f451b8E763672f2d324aE6409';

const PRE_EXECUTION = {
  [CookieMethod.MINT_COOKIE_BY_HAMMER]: isAvailableCreating,
  [CookieMethod.BUY_COOKIE]: isAvailableBuying,
};

const GET_PARAM_FUNC = {
  [CookieMethod.MINT_COOKIE_BY_HAMMER]: getMintCookieParams,
  [CookieMethod.BUY_COOKIE]: getBuyCookieParams,
};

const prepareExcution = async ({ userId, setError, ...data }, methodName) => {
  const isHammerContract = isHammerContractMethod(methodName);
  const abi = await getAbiString(methodName, isHammerContract);
  const preExecution = PRE_EXECUTION[methodName];
  const getParamsFunc = GET_PARAM_FUNC[methodName];

  let preResult = true;
  if (preExecution) {
    preResult = await preExecution({ userId, ...data }, setError);
  }

  if (!abi || !preResult) return false;

  const to = isHammerContract ? HAMMER_CONTRACT_ADDR : COOKIE_CONTRACT_ADDR;
  const value = '0'; // TODO : 추후 수정
  const params = getParamsFunc?.(data) ?? '[]';
  const result = await prepare.executeContract({
    bappName,
    to,
    value,
    abi,
    params,
  });

  return result;
};

export const useExecuteContract = ({ method, userId }) => {
  const [requestData, setRequestKey] = useRecoilState(klipRequestKeyAtom);
  const setError = useSetRecoilState(contractErrorAtom);
  const [state, setState] = useState({
    loading: true,
    error: false,
  });

  const fetchPrepare = async (data) => {
    const result = await prepareExcution({ ...data, userId, setError }, method);
    if (!result || result.err) {
      setError(ContractError.REQUEST_FAIL);
      return false;
    }
    if (result.request_key) {
      setState({
        ...state,
        error: false,
        loading: false,
      });
      setRequestKey((state) => ({ ...state, requestKey: result.request_key }));
    }
    return result.request_key;
  };

  const fetchResult = async (callbackFunc) => {
    const resultData = await getResult(requestData.requestKey);
    if (!resultData?.result) return false;
    if (callbackFunc) {
      return callbackFunc(resultData?.result?.tx_hash);
    }
    return true;
  };

  // reqKey update timing issue => directly take param
  const openDeepLink = (key) => _openDeepLink(key);

  return {
    ...state,
    openDeepLink,
    fetchPrepare,
    fetchResult,
  };
};

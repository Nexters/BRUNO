import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { prepare, getResult } from 'klip-sdk';

import { klipRequestKeyAtom } from '@src/recoil/klip';
import { getAbiString } from './abi';
import { openDeepLink as _openDeepLink } from './utils';
import { CookieMethod } from './types';

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

const COOKIE_CONTRACT_ADDR = '0x80C8be670A3b138b49d21323Fde06d1E48916f4C';

const prepareExcution = async (data, methodName) => {
  const abi = await getAbiString(CookieMethod[methodName]);
  if (!abi) return false;

  const { title, contents, category, hammer } = data;
  const to = COOKIE_CONTRACT_ADDR; // TODO : COIN으로도 치환가능하게 수정
  const value = '0'; // TODO : 추후 수정
  const params = `["${title}","${contents}","null","${category}",${hammer}]`;
  const result = await prepare.executeContract({
    bappName,
    to,
    value,
    abi,
    params,
  });

  return result;
};

export const useExecuteContract = ({ method }) => {
  const [requestData, setRequestKey] = useRecoilState(klipRequestKeyAtom);
  const [state, setState] = useState({
    loading: true,
    error: false,
  });

  const fetchPrepare = async (data) => {
    const result = await prepareExcution(data, method);
    if (!result || result.err) setState({ error: true, loading: false });
    else if (result.request_key) {
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
      return callbackFunc({
        txHash: resultData?.result?.tx_hash,
      });
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

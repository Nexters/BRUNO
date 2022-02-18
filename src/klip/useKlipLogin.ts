import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useCookies } from 'react-cookie';

import { klipRequestKeyAtom } from '@src/recoil/klip';
import { CookieName } from '@src/hooks';
import { postKlipAuth, getKlipResult } from './axios';
import { KlipApiStatus } from './types';
import { openDeepLink } from './utils';

export const useKlipPrepare = () => {
  const setKlip = useSetRecoilState(klipRequestKeyAtom);
  const { isFetched, data } = useQuery(['klip/prepare'], postKlipAuth, {
    onSuccess: (data) => {
      const { request_key: requestKey, expiration_time: expirationTime } =
        data.data;
      setKlip({ requestKey, expirationTime });
    },
  });

  return { isFetched, requestKey: data?.data?.request_key };
};

export const useKlipLogin = () => {
  const [_, setCookie] = useCookies([CookieName.KLIP_ADDRESS]);
  const navigate = useNavigate();
  const klip = useRecoilValue(klipRequestKeyAtom);

  const { isFetched, refetch, data } = useQuery(
    ['klip/result'],
    () => getKlipResult(klip.requestKey),
    {
      onSuccess: ({ data }) => {
        const { status, result } = data;
        if (status === KlipApiStatus.COMPLETED && result?.klaytn_address) {
          setCookie(CookieName.KLIP_ADDRESS, result.klaytn_address);
          navigate('/');
        }
      },
      enabled: false,
    },
  );

  return {
    isFetched,
    refetch,
    openDeepLink,
    isRequestFail: isFetched && data?.data?.status === KlipApiStatus.PREPARED,
  };
};

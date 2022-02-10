import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useCookies } from 'react-cookie';

import { klipAuthAtom } from '@src/recoil/auth';
import { web2app } from '@src/utils/web2app';
import { CookieName } from '@src/hooks';
import { postKlipAuth, getKlipResult } from './axios';
import { KlipApiStatus } from './types';

/*
 * urlScheme : iphone custom scheme
 * intentURI : android intent URI
 * appName : application Name (ex. facebook, twitter, daum)
 * storeURL : app store URL
 * willInvokeApp : function for logging
 * onAppMissing : fallback function (default. move to appstore)
 * onUnsupportedEnvironment : fallback function
 */

export const openDeepLink = (reqKey: string) => {
  web2app({
    urlScheme: `kakaotalk://klipwallet/open?url=https://klipwallet.com/?target=/a2a?request_key=${reqKey}`,
    intentURI: `intent://klipwallet/open?url=https://klipwallet.com/?target=/a2a?request_key=${reqKey}#Intent;scheme=kakaotalk;package=com.kakao.talk;end`,
    appName: 'COOKIEPANG',
    storeURL: 'itms-apps://itunes.apple.com/app/id362057947',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    willInvokeApp: () => {},
  });
};

export const useKlipPrepare = () => {
  const setKlip = useSetRecoilState(klipAuthAtom);
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
  const klip = useRecoilValue(klipAuthAtom);

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
  console.log(data);
  return {
    isFetched,
    refetch,
    openDeepLink,
    isRequestFail: isFetched && data?.data?.status === KlipApiStatus.PREPARED,
  };
};

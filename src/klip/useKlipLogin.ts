import { useQuery } from 'react-query';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { klipAuthAtom, klipAddressAtom } from '@src/recoil/auth';
import { web2app } from '@src/utils/web2app';
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
  });
};

export const useKlipPrepare = () => {
  const setKlip = useSetRecoilState(klipAuthAtom);
  const { isFetched } = useQuery(['klip', 'prepare'], postKlipAuth, {
    onSuccess: (data) => {
      const { request_key: requestKey, expiration_time: expirationTime } =
        data.data;
      setKlip({ requestKey, expirationTime });
    },
  });

  return { isFetched };
};

export const useKlipLogin = () => {
  const klip = useRecoilValue(klipAuthAtom);
  const setAddress = useSetRecoilState(klipAddressAtom);

  const { isFetched, refetch } = useQuery(
    ['klip', 'result'],
    () => getKlipResult(klip.requestKey),
    {
      onSuccess: ({ data }) => {
        const { status, result } = data;
        if (status === KlipApiStatus.COMPLETED && result?.klaytn_address) {
          setAddress(result.klaytn_address);
        }
      },
      enabled: false,
    },
  );

  return { isFetched, refetch, openDeepLink };
};

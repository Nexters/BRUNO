import { useCookies } from 'react-cookie';
import { isMobile } from 'react-device-detect';

export enum CookieName {
  KLIP_ADDRESS = 'kad',
  IS_APPROVAL = 'isl',
}

export const useLogin = () => {
  const [cookies] = useCookies([CookieName.KLIP_ADDRESS, CookieName.IS_APPROVAL]);

  const klipAddressCookie = cookies[CookieName.KLIP_ADDRESS];
  const isApproval = cookies[CookieName.IS_APPROVAL];
  // TODO : server에서 valid 확인하는 로직 추가

  return {
    address: klipAddressCookie,
    isLoggedIn: !!klipAddressCookie,
    isMobile,
    userId: 1,
    isApproval: !!isApproval,
  };
};

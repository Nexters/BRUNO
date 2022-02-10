import { useCookies } from 'react-cookie';
import { isMobile } from 'react-device-detect';

export enum CookieName {
  KLIP_ADDRESS = 'kad',
}

export const useLogin = () => {
  const [cookies] = useCookies([CookieName.KLIP_ADDRESS]);

  const klipAddressCookie = cookies[CookieName.KLIP_ADDRESS];
  // TODO : server에서 valid 확인하는 로직 추가

  return {
    isLoggedIn: !!klipAddressCookie,
    isMobile,
  };
};

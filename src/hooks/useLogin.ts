import { useCookies } from 'react-cookie';
import { isMobile } from 'react-device-detect';

export enum CookieName {
  KLIP_ADDRESS = 'kad',
}

export const useLogin = () => {
  const [cookies] = useCookies([CookieName.KLIP_ADDRESS]);

  const klipAddressCookie = cookies[CookieName.KLIP_ADDRESS];

  return {
    isLoggedIn: !!klipAddressCookie,
    isMobile,
  };
};

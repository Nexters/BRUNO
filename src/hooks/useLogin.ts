import { useCookies } from 'react-cookie';

export enum CookieName {
  KLIP_ADDRESS = 'kad',
  IS_APPROVAL = 'isl',
  USER_ID = 'cui',
  FINISH_ONBOARD = 'fob',
}

export const useLogin = () => {
  const [cookies, _, removeCookie] = useCookies([
    CookieName.KLIP_ADDRESS,
    CookieName.IS_APPROVAL,
    CookieName.USER_ID,
    CookieName.FINISH_ONBOARD,
  ]);

  const klipAddressCookie = cookies[CookieName.KLIP_ADDRESS];
  const isApproval = !!cookies[CookieName.IS_APPROVAL];
  const userId = Number(cookies[CookieName.USER_ID]);
  const finishOnboard = !!cookies[CookieName.FINISH_ONBOARD];

  const logout = () => {
    removeCookie(CookieName.KLIP_ADDRESS);
    removeCookie(CookieName.IS_APPROVAL);
    removeCookie(CookieName.USER_ID);
    removeCookie(CookieName.FINISH_ONBOARD);
  };

  return {
    address: klipAddressCookie ?? '',
    isLoggedIn: !!klipAddressCookie && !!userId,
    userId,
    isApproval,
    finishOnboard,
    logout,
  };
};

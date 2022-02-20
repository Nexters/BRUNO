import { useQuery } from 'react-query';

import { CommonUseQuery, CookieType } from './types';
import { getCookieList } from './cookies';
import { getUser } from './users';

type UseGetAllCookie = CommonUseQuery & {
  cookieList: CookieType[];
};

export const useGetAllCookies = (): UseGetAllCookie => {
  const { data, isLoading, isError } = useQuery(['categories', 'all', 'cookies'], () => getCookieList(0));

  return { cookieList: data?.data ?? [], isLoading, isError };
};

export const useUserInfo = ({ userId }: { userId: string }) => {
  const { data: userProfile } = useQuery(['users'], () => getUser(userId));

  return {
    userProfile: userProfile ?? {},
  };
};

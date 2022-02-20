import { useQuery } from 'react-query';

import { CommonUseQuery, CookieType, UserCookieList, UserCookieType, UserProfileType } from './types';
import { getCookieList, getUserCookies } from './cookies';
import { getUser } from './users';

type UseGetAllCookie = CommonUseQuery & {
  cookieList: CookieType[];
};

export const useGetAllCookies = (): UseGetAllCookie => {
  const { data, isLoading, isError } = useQuery(['categories', 'all', 'cookies'], () => getCookieList(0));

  return { cookieList: data?.data ?? [], isLoading, isError };
};

export const useUserInfo = ({ userId }: { userId: string }) => {
  const { data: userProfile } = useQuery<UserProfileType>(['users', 'profile'], () => getUser(userId));
  const { data: collectedCookies } = useQuery<UserCookieList>(['users', 'collected'], () =>
    getUserCookies({ userId, target: UserCookieType.COLLECTED }),
  );
  const { data: createdCookies } = useQuery<UserCookieList>(['users', 'cookies'], () =>
    getUserCookies({ userId, target: UserCookieType.COOKIES }),
  );

  return {
    userProfile: userProfile ?? null,
    collectedCookies: collectedCookies ?? { cookies: [] },
    createdCookies: createdCookies ?? { cookies: [] },
    count: { collected: collectedCookies?.totalCount || 0 },
  };
};

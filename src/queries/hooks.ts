import { useQuery } from 'react-query';

import { useLogin } from '@src/hooks';
import { CookieFeed, UserCookieList, UserCookieType, UserProfileType } from './types';
import { getCookieList, getUserCookies } from './cookies';
import { getUser } from './users';

export const useGetAllCookies = () => {
  const { userId } = useLogin();
  const { data, isLoading, isError } = useQuery<CookieFeed[]>(['categories', 'all', 'cookies'], () =>
    getCookieList({ userId }),
  );

  return { cookieList: data ?? [], isLoading, isError };
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
    count: { collected: collectedCookies?.totalCount || 0, created: createdCookies?.totalCount || 0 },
  };
};

import { useInfiniteQuery, useQuery } from 'react-query';

import { useLogin } from '@src/hooks';

import { CookieFeed, UserCookieList, UserCookieType, UserProfileType, UserAsk, AskStatus } from './types';
import { getCookieList, getUserCookies, getCookieListByCategory } from './cookies';
import { getUser, getUserAsk } from './users';

export enum CookieFeedType {
  ALL = 'ALL',
  CATEGORY = 'CATEGORY',
}

export const useGetCookies = ({ categoryId, type }: { categoryId: string; type: CookieFeedType }) => {
  const { userId } = useLogin();
  const {
    data: allCookies,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<CookieFeed>(
    ['categories', 'all', 'cookies'],
    ({ pageParam = 0 }) => getCookieList({ userId, page: pageParam }),
    {
      getNextPageParam: (lastPage) => (lastPage?.isLastPage ? undefined : (lastPage?.nowPageIndex || 0) + 1),
      enabled: type === CookieFeedType.ALL,
    },
  );
  const {
    data: categoryCookies,
    isLoading: categoryIsLoading,
    isError: categoryIsError,
    fetchNextPage: categoryFetchNextPage,
    hasNextPage: categoryHasNextPage,
  } = useInfiniteQuery<CookieFeed>(
    ['categories', categoryId, 'cookies'],
    ({ pageParam = 0 }) => getCookieListByCategory({ userId, categoryId, page: pageParam }),
    {
      getNextPageParam: (lastPage) => (lastPage?.isLastPage ? undefined : (lastPage?.nowPageIndex || 0) + 1),
      enabled: type === CookieFeedType.CATEGORY,
    },
  );

  const isAll = type === CookieFeedType.ALL;

  return {
    cookiePages: (isAll ? allCookies?.pages : categoryCookies?.pages) || [],
    isLoading: isAll ? isLoading : categoryIsLoading,
    isError: isAll ? isError : categoryIsError,
    fetchNextPage: isAll ? fetchNextPage : categoryFetchNextPage,
    hasNextPage: (isAll ? hasNextPage : categoryHasNextPage) || false,
  };
};

export const useUserInfo = ({ userId }: { userId: string }) => {
  const { data: userProfile } = useQuery<UserProfileType>(['users', 'profile', userId], () => getUser(userId));

  // TODO : infinite scroll
  const { data: collectedCookies } = useQuery<UserCookieList>(['users', 'collected', userId], () =>
    getUserCookies({ userId, target: UserCookieType.OWNED }),
  );
  const { data: createdCookies } = useQuery<UserCookieList>(['users', 'created', userId], () =>
    getUserCookies({ userId, target: UserCookieType.AUTHOR }),
  );

  const { data: askItems } = useQuery<UserAsk>(['user', 'ask', userId], () => getUserAsk({ userId }));

  return {
    userProfile: userProfile ?? null,
    collectedCookies: collectedCookies ?? { contents: [] },
    createdCookies: createdCookies ?? { contents: [] },
    count: {
      collected: collectedCookies?.totalCount || 0,
      created: createdCookies?.totalCount || 0,
      ask: askItems?.totalCount || 0,
    },
  };
};

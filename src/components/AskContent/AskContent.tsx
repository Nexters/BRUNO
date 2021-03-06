import { useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';

import { UserAsk } from '@src/queries/types';
import { getUserAsk } from '@src/queries/users';
import AskItem from './AskItem';

const Wrapper = styled.div`
  padding-top: 20px;
`;

interface Props {
  isMy?: boolean;
  userId: string;
}

function AskContent({ isMy = false, userId }: Props) {
  const {
    data: askPages,
    refetch,
    hasNextPage,
    fetchNextPage,
    isLoading,
  } = useInfiniteQuery<UserAsk>(
    ['user', 'ask', userId, 'infinite'],
    ({ pageParam }) => getUserAsk({ userId, page: pageParam }),
    {
      getNextPageParam: (lastPage) => (lastPage?.isLastPage ? undefined : (lastPage?.nowPageIndex || 0) + 1),
    },
  );

  useEffect(() => {
    // TODO 수정 필요
    const feedElement = document.getElementById('ask-feed');
    if (!feedElement) return;
    if (!isLoading && hasNextPage && feedElement.scrollHeight <= feedElement.clientHeight) {
      fetchNextPage();
    }
  }, [isLoading, hasNextPage]);

  if (!askPages) return null;

  return (
    <InfiniteScroll
      hasMore={hasNextPage || false}
      next={fetchNextPage}
      loader={null}
      dataLength={askPages?.pages?.[0]?.totalCount || 0}
    >
      <Wrapper id="ask-feed">
        {askPages?.pages?.map((page) =>
          page?.contents?.map((ask) => <AskItem key={ask.id} item={ask} isMy={isMy} refetch={refetch} />),
        )}
      </Wrapper>
    </InfiniteScroll>
  );
}

export default AskContent;

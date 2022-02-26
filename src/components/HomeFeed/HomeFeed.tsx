import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

import FeedCard from '@src/components/FeedCard';

import styled from 'styled-components';
import { CookieFeedType, useGetCookies } from '@src/queries/hooks';
import Loading from '@src/components/shared/Loading';
import Error, { ErrorType } from '../shared/Error';

const ContentsWrapper = styled.div`
  ${(props) => props.theme.media.large} {
    display: flex;
    flex: 50%;
    flex-wrap: wrap;
  }
`;

function HomeFeed() {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get('category') || '';
  const { cookiePages, isLoading, isError, fetchNextPage, hasNextPage } = useGetCookies({
    categoryId,
    type: categoryId ? CookieFeedType.CATEGORY : CookieFeedType.ALL,
  });

  useEffect(() => {
    // TODO 수정 필요
    const feedElement = document.getElementById('feed');
    if (!feedElement) return;
    if (!isLoading && hasNextPage && feedElement.scrollHeight <= feedElement.clientHeight) {
      fetchNextPage();
    }
  }, [isLoading, hasNextPage]);

  if (isLoading) return <Loading />;
  if (isError) return <Error type={ErrorType.SERVER_ERROR} />;

  return (
    <InfiniteScroll
      hasMore={hasNextPage}
      next={fetchNextPage}
      loader={null}
      dataLength={cookiePages?.[0]?.totalCount || 0}
    >
      <ContentsWrapper id="feed">
        {cookiePages.map((page) => page?.contents?.map((cookie) => <FeedCard key={cookie.cookieId} cookie={cookie} />))}
      </ContentsWrapper>
    </InfiniteScroll>
  );
}

export default HomeFeed;

import InfiniteScroll from 'react-infinite-scroll-component';
import HomeTab from '@src/components/HomeTab';
import FeedCard from '@src/components/FeedCard';

import styled from 'styled-components';
import { CookieFeedType, useGetCookies } from '@src/queries/hooks';
import { useSearchParams } from 'react-router-dom';
import Loading from '@src/components/shared/Loading';

const ContentsWrapper = styled.main`
  border-top: 8px solid ${(props) => props.theme.colors.basic.gray20};
  ${(props) => props.theme.media.large} {
    display: flex;
    flex: 50%;
    flex-wrap: wrap;
  }
`;

function HomePage() {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get('category') || '';
  const { cookiePages, isLoading, fetchNextPage, hasNextPage } = useGetCookies({
    categoryId,
    type: categoryId ? CookieFeedType.CATEGORY : CookieFeedType.ALL,
  });

  if (isLoading) return <Loading />;

  return (
    <>
      <HomeTab />
      <ContentsWrapper>
        <InfiniteScroll
          hasMore={hasNextPage}
          next={fetchNextPage}
          loader={<div>loading</div>}
          dataLength={cookiePages?.[0].totalCount}
        >
          {cookiePages.map((page) =>
            page.contents?.map((cookie) => <FeedCard key={cookie.cookieId} cookie={cookie} />),
          )}
        </InfiniteScroll>
      </ContentsWrapper>
    </>
  );
}

export default HomePage;

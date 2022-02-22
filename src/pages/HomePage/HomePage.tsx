import HomeTab from '@src/components/HomeTab';
import FeedCard from '@src/components/FeedCard';

import styled from 'styled-components';
import { useGetAllCookies } from '@src/queries/hooks';
import { useSearchParams } from 'react-router-dom';

const ContentsWrapper = styled.main`
  border-top: 8px solid ${(props) => props.theme.colors.basic.gray20};
`;

function HomePage() {
  const [searchParams] = useSearchParams();
  const { cookieList } = useGetAllCookies({ categoryId: searchParams.get('category') || '' });

  return (
    <>
      <HomeTab />
      <ContentsWrapper>
        {cookieList.map((cookie) => (
          <FeedCard key={cookie.cookieId} cookie={cookie} />
        ))}
      </ContentsWrapper>
    </>
  );
}

export default HomePage;

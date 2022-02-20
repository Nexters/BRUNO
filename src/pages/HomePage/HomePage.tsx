import HomeTab from '@src/components/HomeTab';
import FeedCard from '@src/components/FeedCard';

import styled from 'styled-components';
import { useGetAllCookies } from '@src/queries/cookies';

const ContentsWrapper = styled.main`
  border-top: 8px solid ${(props) => props.theme.colors.basic.gray20};
`;

function HomePage() {
  const { cookieList } = useGetAllCookies();

  return (
    <>
      <HomeTab />
      <ContentsWrapper>
        {cookieList.map((cookie) => (
          <FeedCard key={cookie.id} cookie={cookie} />
        ))}
      </ContentsWrapper>
    </>
  );
}

export default HomePage;

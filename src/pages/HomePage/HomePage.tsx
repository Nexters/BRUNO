import PageLayout from '@src/components/shared/PageLayout';
import Header from '@src/components/Header/Header';
import Navigation from '@src/components/Navigation';
import HomeTab from '@src/components/HomeTab';

import styled from 'styled-components';
import Feed from '@src/components/Feed';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 71px);
`;

const ContentsWrapper = styled.main`
  height: 100%;
  padding: 16px;
  padding-bottom: 68px;
  overflow-x: hidden;
  overflow-y: scroll;
`;

function HomePage() {
  return (
    <PageLayout>
      <Header />
      <Container>
        <ContentsWrapper>
          <HomeTab />
          <Feed />
        </ContentsWrapper>
      </Container>

      <Navigation />
    </PageLayout>
  );
}

export default HomePage;

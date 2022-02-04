import PageLayout from '@src/components/shared/PageLayout';
import Header from '@src/components/Header/Header';
import Navigation from '@src/components/Navigation';
import HomeTab from '@src/components/HomeTab';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ContentsWrapper = styled.main`
  height: calc(100% - 56px);
  padding-bottom: 68px;
  overflow-y: scroll;
`;

function HomePage() {
  return (
    <PageLayout padding="0">
      <Container>
        <Header />
        <ContentsWrapper>
          <HomeTab />
          내용
        </ContentsWrapper>
      </Container>

      <Navigation />
    </PageLayout>
  );
}

export default HomePage;

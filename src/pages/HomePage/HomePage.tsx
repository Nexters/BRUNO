import Header from '@src/components/Header';
import Navigation from '@src/components/Navigation';
import PageLayout from '@src/components/shared/PageLayout';
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
  background-color: ${(props) => props.theme.colors.gray100};
`;

function HomePage() {
  return (
    <PageLayout padding="0">
      <Container>
        <Header />
        <ContentsWrapper>
          <p>내용</p>
        </ContentsWrapper>
      </Container>

      <Navigation />
    </PageLayout>
  );
}

export default HomePage;

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
  const Feeds = [
    {
      id: 1,
      question:
        'My real secret is real real real rel xxxxxxxsssssssssssssssss?',
      user: {
        profile: null,
        name: 'John Doe',
      },
      viewCount: 235,
      hammer: 52434,
    },
    {
      id: 2,
      question: 'My real secret',
      user: {
        profile: null,
        name: 'John Doe',
      },
      viewCount: 235,
      hammer: 54535,
    },
    {
      id: 3,
      question: 'My real secret',
      user: {
        profile: null,
        name: 'John Doe',
      },
      viewCount: 235,
      hammer: 5422,
    },
  ];

  return (
    <PageLayout>
      <Header />
      <Container>
        <ContentsWrapper>
          <HomeTab />
          {Feeds.map((data) => {
            const { id, question, user, viewCount, hammer } = data;
            return (
              <Feed
                key={id}
                question={question}
                user={user}
                viewCount={viewCount}
                hammer={hammer}
              />
            );
          })}
        </ContentsWrapper>
      </Container>

      <Navigation />
    </PageLayout>
  );
}

export default HomePage;

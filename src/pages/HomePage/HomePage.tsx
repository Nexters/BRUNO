import HomeTab from '@src/components/HomeTab';
import Feed from '@src/components/Feed';

import styled from 'styled-components';

const ContentsWrapper = styled.main`
  margin-top: 24px;
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
    <>
      <HomeTab />
      <ContentsWrapper>
        {Feeds.map((data) => {
          const { id, question, user, viewCount, hammer } = data;
          return (
            <Feed
              key={id}
              id={id}
              question={question}
              user={user}
              viewCount={viewCount}
              hammer={hammer}
            />
          );
        })}
      </ContentsWrapper>
    </>
  );
}

export default HomePage;

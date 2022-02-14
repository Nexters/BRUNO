import styled from 'styled-components';
import UserInfo from './UserInfo';
import FeedContent from './FeedContent';
import { FeedProps, UserType } from './type';

const Container = styled.div`
  width: 100%;
  padding: 0 16px;
  color: ${(props) => props.theme.colors.basic.gray100};
`;

const Border = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.basic.gray20};
  margin: 24px 0;
`;

interface Props extends FeedProps {
  user: UserType;
}

export default function Feed({ id, question, user, viewCount, hammer }: Props) {
  const { profile, name } = user;

  return (
    <>
      <Container>
        <UserInfo profile={profile} name={name} />
        <FeedContent
          id={id}
          question={question}
          viewCount={viewCount}
          hammer={hammer}
        />
      </Container>
      <Border />
    </>
  );
}

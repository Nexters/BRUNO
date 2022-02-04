import styled from 'styled-components';
import UserInfo from './UserInfo';
import FeedContent from './FeedContent';
import { FeedProps, UserType } from './type';

const Container = styled.div`
  width: 100%;
  padding: 24px 16px;
  color: ${(props) => props.theme.colors.gray100};
`;

interface Props extends FeedProps {
  user: UserType;
}

export default function Feed({ question, user, viewCount, hammer }: Props) {
  const { profile, name } = user;

  return (
    <Container>
      <UserInfo profile={profile} name={name} />
      <FeedContent question={question} viewCount={viewCount} hammer={hammer} />
    </Container>
  );
}
import styled from 'styled-components';
import UserInfo from './UserInfo';
import FeedContent from './FeedContent';

const Container = styled.div`
  width: 100%;
  padding: 24px 16px;
  color: ${(props) => props.theme.colors.gray100};
`;

export default function Feed() {
  return (
    <Container>
      <UserInfo />
      <FeedContent question="My real secret is real real real rel xxxxxxxssssssssssssssasdsss?" />
    </Container>
  );
}

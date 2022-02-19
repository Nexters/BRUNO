import styled from 'styled-components';
import { CookieType } from '@src/queries/types';
import UserInfo from './UserInfo';
import FeedContent from './FeedContent';

const Container = styled.div`
  width: 100%;
  padding: 24px 20px 16px 20px;
  color: ${(props) => props.theme.colors.basic.gray100};
  border-bottom: 1px solid ${(props) => props.theme.colors.basic.gray30};
`;

interface Props {
  cookie: CookieType;
}

export default function Feed({ cookie }: Props) {
  const { id, authorUserId, title, price, createdAt } = cookie;

  return (
    <Container>
      <UserInfo profile="" name={`User ${authorUserId}`} createdAt={createdAt} />
      <FeedContent id={id} question={title} viewCount={0} hammer={price} />
    </Container>
  );
}

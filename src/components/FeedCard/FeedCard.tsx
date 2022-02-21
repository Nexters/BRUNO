import styled from 'styled-components';
import { CookieFeed } from '@src/queries/types';
import UserInfo from './UserInfo';
import FeedContent from './FeedContent';

const Container = styled.div`
  width: 100%;
  padding: 24px 20px 16px 20px;
  color: ${(props) => props.theme.colors.basic.gray100};
  border-bottom: 1px solid ${(props) => props.theme.colors.basic.gray30};

  ${(props) => props.theme.media.large} {
    width: 50%;
  }
`;

interface Props {
  cookie: CookieFeed;
}

export default function FeedCard({ cookie }: Props) {
  const { creatorId, creatorProfileUrl, creatorrName, createdAt } = cookie;

  return (
    <Container>
      {/* TODO : 서버한테 닉네임 달라고 하기 */}
      <UserInfo userId={creatorId} profile={creatorProfileUrl} name={creatorrName} createdAt={createdAt} />
      <FeedContent cookie={cookie} />
    </Container>
  );
}

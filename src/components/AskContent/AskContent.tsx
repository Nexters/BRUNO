import { AskStatus, UserAsk } from '@src/queries/types';
import { getUserAsk } from '@src/queries/users';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import AskItem from './AskItem';

const Wrapper = styled.div`
  padding-top: 20px;
`;

interface Props {
  isMy?: boolean;
  userId: string;
}

function AskContent({ isMy = false, userId }: Props) {
  const { data: askList, refetch } = useQuery<UserAsk[]>(['user', 'ask', userId], () => getUserAsk(userId));

  if (!askList) return null;
  const filteredAskList = askList.filter((ask) => ask.status === AskStatus.PENDING);

  return (
    <Wrapper>
      {filteredAskList.map((ask) => (
        <AskItem key={ask.id} item={ask} isMy={isMy} refetch={refetch} />
      ))}
    </Wrapper>
  );
}

export default AskContent;

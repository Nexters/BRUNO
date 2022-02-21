import { AskStatus, UserAsk } from '@src/queries/types';
import styled from 'styled-components';
import AskItem from './AskItem';

const Wrapper = styled.div`
  padding-top: 20px;
`;

interface Props {
  isMy?: boolean;
  userId: string;
  askItems: UserAsk[];
  refetch: () => void;
}

function AskContent({ isMy = false, userId, askItems, refetch }: Props) {
  if (!askItems) return null;
  const filteredAskList = askItems.filter((ask) => ask.status === AskStatus.PENDING);

  return (
    <Wrapper>
      {filteredAskList.map((ask) => (
        <AskItem key={ask.id} item={ask} isMy={isMy} refetch={refetch} />
      ))}
    </Wrapper>
  );
}

export default AskContent;

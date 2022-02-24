import { UserAsk } from '@src/queries/types';
import styled from 'styled-components';
import AskItem from './AskItem';

const Wrapper = styled.div`
  padding-top: 20px;
`;

interface Props {
  isMy?: boolean;
  askItems: UserAsk['contents'];
  refetch: () => void;
}

function AskContent({ isMy = false, askItems, refetch }: Props) {
  if (!askItems) return null;

  return (
    <Wrapper>
      {askItems.map((ask) => (
        <AskItem key={ask.id} item={ask} isMy={isMy} refetch={refetch} />
      ))}
    </Wrapper>
  );
}

export default AskContent;

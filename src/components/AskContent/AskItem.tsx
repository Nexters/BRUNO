import styled from 'styled-components';
import { theme } from '@src/assets/styles';
import { Ask, AskStatus } from '@src/queries/types';
import { useNavigate } from 'react-router-dom';
import { updateAskStatus } from '@src/queries/ask';
import ResponseButton from './ResponseButton';

const Wrapper = styled.div`
  min-height: 76px;
  margin: 0 20px;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.basic.gray20};
  font-size: ${(props) => props.theme.fontSize.body01};
  color: ${(props) => props.theme.colors.basic.gray90};
  & + & {
    margin-top: 16px;
  }
`;

const LabelWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const Label = styled.span`
  font-weight: 700;
`;

const Question = styled.div`
  ${theme.text.ellipsis(2)}
`;

interface Props {
  item: Ask;
  isMy: boolean;
  refetch: () => void;
}

function AskItem({ item, isMy, refetch }: Props) {
  const navigate = useNavigate();
  const { id, title } = item;

  const onClickAccept = () => navigate('/create/cookie', { state: { title, askId: id } });

  const onClickIgnore = async () => {
    const result = await updateAskStatus(id, AskStatus.IGNORED);
    if (result) refetch();
  };

  return (
    <Wrapper>
      <LabelWrapper>
        <Label>Q.</Label>
        <Question>{title}</Question>
      </LabelWrapper>
      {isMy && <ResponseButton onClickAccept={onClickAccept} onClickIgnore={onClickIgnore} />}
    </Wrapper>
  );
}

export default AskItem;

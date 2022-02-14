import styled from 'styled-components';
import { theme } from '@src/assets/styles';
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
  question: string;
  isMy: boolean;
}

function RequestItem({ question, isMy }: Props) {
  return (
    <Wrapper>
      <LabelWrapper>
        <Label>Q.</Label>
        <Question>{question}</Question>
      </LabelWrapper>
      {isMy && <ResponseButton />}
    </Wrapper>
  );
}

export default RequestItem;

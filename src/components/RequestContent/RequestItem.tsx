// import { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 125px;
  margin: 0 20px;
  padding: 16px 24px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.gray90};
  & + & {
    margin-top: 16px;
  }
`;

const Label = styled.span`
  margin-bottom: 8px;
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: 700;
  color: ${(props) => props.theme.colors.gray50};
`;

const Question = styled.div`
  font-size: ${(props) => props.theme.fontSize.body01};
`;

interface Props {
  question: string;
}

function RequestItem({ question }: Props) {
  return (
    <Wrapper>
      <Label>Q</Label>
      <Question>{question}</Question>
    </Wrapper>
  );
}

export default RequestItem;

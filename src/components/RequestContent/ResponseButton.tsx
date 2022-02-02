// import { useEffect } from 'react';
import styled from 'styled-components';

import { Button } from '@src/components/shared/MainButton';

const Wrapper = styled.div`
  display: flex;
  margin: 0 20px;
  gap: 8px;
`;

const AcceptButton = styled(Button)`
  /* margin-bottom: 8px; */
  /* font-size: ${(props) => props.theme.fontSize.large}; */
  /* font-weight: 700; */
  /* color: ${(props) => props.theme.colors.gray50}; */
`;

const RejectButton = styled(Button)`
  /* font-size: ${(props) => props.theme.fontSize.body01}; */
  border: 1px solid #f1f1f5;
  background: none;
  color: ${(props) => props.theme.colors.gray90};
`;

function ResponseButton() {
  return (
    <Wrapper>
      <AcceptButton>수락하기</AcceptButton>
      <RejectButton>삭제하기</RejectButton>
    </Wrapper>
  );
}

export default ResponseButton;

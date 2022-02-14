import styled from 'styled-components';

import { Button as button } from '@src/components/shared/MainButton';

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`;

const Button = styled(button)`
  margin: 0;
  height: 40px;
`;

const RejectButton = styled(Button)`
  background: none;
  background-color: ${(props) => props.theme.colors.basic.gray30};
  color: ${(props) => props.theme.colors.basic.gray90};
`;

function ResponseButton() {
  return (
    <Wrapper>
      <Button>Accept</Button>
      <RejectButton>Ignore</RejectButton>
    </Wrapper>
  );
}

export default ResponseButton;

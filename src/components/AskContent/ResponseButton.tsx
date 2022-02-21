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

const IgnoreButton = styled(Button)`
  background: none;
  background-color: ${(props) => props.theme.colors.basic.gray30};
  color: ${(props) => props.theme.colors.basic.gray90};
`;

type Props = {
  onClickAccept: () => void;
  onClickIgnore: () => void;
};

function ResponseButton({ onClickAccept, onClickIgnore }: Props) {
  return (
    <Wrapper>
      <Button onClick={onClickAccept}>쿠키 굽기</Button>
      <IgnoreButton onClick={onClickIgnore}>요청 삭제하기</IgnoreButton>
    </Wrapper>
  );
}

export default ResponseButton;

import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px 16px;
  padding: 13px;
  border-radius: 44px;
  line-height: 160%;
  background: ${(props) => props.theme.background.button00};
  font-weight: bold;
  color: ${(props) => props.theme.colors.gray100};
`;

interface MainButtonProps {
  value: string;
  onClick: () => void;
}

function MainButton({ value, onClick }: MainButtonProps) {
  return (
    <ButtonWrapper>
      <Button onClick={() => onClick?.()}>{value}</Button>
    </ButtonWrapper>
  );
}

export default MainButton;

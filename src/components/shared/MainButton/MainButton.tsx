import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Button = styled.button<{ buttonStyle?: string }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px 0;
  padding: 13px;
  border-radius: 44px;
  background: ${(props) => props.theme.background.button00};
  font-size: ${(props) => props.theme.fontSize.body02};
  line-height: 160%;
  font-weight: bold;
  color: ${(props) => props.theme.colors.gray100};
  ${(props) => props.buttonStyle};
`;

interface MainButtonProps {
  value: string;
  onClick?: () => void;
  buttonStyle?: any;
}

function MainButton({ value, onClick, buttonStyle }: MainButtonProps) {
  return (
    <ButtonWrapper>
      <Button buttonStyle={buttonStyle} onClick={() => onClick?.()}>
        {value}
      </Button>
    </ButtonWrapper>
  );
}

export default MainButton;

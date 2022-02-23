import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Button = styled.button<{ buttonStyle?: string; disabled?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px 0;
  padding: 13px;
  border-radius: 44px;
  background: ${({ disabled, theme }) => (disabled ? 'none' : theme.colors.brand.main)};
  background-color: ${({ disabled, theme }) => (disabled ? theme.colors.basic.gray30 : null)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  font-size: ${(props) => props.theme.fontSize.body02};
  line-height: 160%;
  font-weight: bold;
  color: ${({ disabled, theme }) => (disabled ? theme.colors.basic.gray40 : theme.colors.basic.gray100)};
  ${(props) => props.buttonStyle};
`;

interface MainButtonProps {
  value: string;
  onClick?: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  buttonStyle?: any;
  disabled?: boolean;
}

function MainButton({ value, onClick, buttonStyle, disabled }: MainButtonProps) {
  return (
    <ButtonWrapper>
      <Button buttonStyle={buttonStyle} onClick={() => onClick?.()} disabled={disabled}>
        {value}
      </Button>
    </ButtonWrapper>
  );
}

export default MainButton;

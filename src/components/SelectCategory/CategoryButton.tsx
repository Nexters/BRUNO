import Icon from '@src/assets/Icon';
import { theme } from '@src/assets/styles';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  width: 100%;
  height: 48px;
  border-bottom: 1px solid #3e465b;
`;

const Text = styled.p<{ isActive: boolean }>`
  padding: 11px 16px;
  color: ${({ isActive }) => (isActive ? theme.colors.basic.gray90 : theme.colors.basic.gray40)};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  margin: 12px 16px;
  border-radius: 100px;
  background-image: ${(props) => props.theme.colors.brand.main};
`;

const AddButton = styled.button<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  border-radius: 100px;
  background: ${({ isActive }) => (isActive ? theme.colors.brand.main : theme.colors.background.gradientBlack)};
`;

type Props = {
  info: {
    id: number;
    name: string;
    color: string;
  };
  isActive: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleClickButton: (e: any) => void;
};

function CategoryButton({ info, isActive, handleClickButton }: Props) {
  const { name } = info;
  return (
    <Root>
      <Text isActive={isActive}>{name}</Text>

      <ButtonWrapper>
        <AddButton isActive={isActive} onClick={handleClickButton}>
          <Icon icon="plus24" size={24} color={theme.colors.basic.gray90} />
        </AddButton>
      </ButtonWrapper>
    </Root>
  );
}

export default CategoryButton;

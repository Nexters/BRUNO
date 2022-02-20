import styled from 'styled-components';
import { rgba } from 'polished';

import { theme } from '@src/assets/styles/theme';
import { Category } from '@src/recoil/category';
import { CATEGORY_COLOR_MAP } from './const';

type Props = {
  category: Category;
  isSelected: boolean;
  onClick?: () => void;
  disabled?: boolean;
};

type ButtonProps = {
  isSelected: boolean;
  color: string;
  disabled?: boolean;
};

const getCategoryButtonColor = ({
  isSelected,
  color,
  disabled,
}: ButtonProps) => {
  if (disabled) {
    return isSelected ? theme.colors.basic.gray30 : theme.colors.basic.gray20;
  }
  return isSelected ? rgba(color, 0.5) : 'transparent';
};

const Button = styled.button<ButtonProps>`
  width: fit-content;
  height: 40px;
  padding: 7px 16px;
  border: ${({ color, disabled }) =>
    disabled ? 'none' : `1px solid ${color}`};
  border-radius: 37px;
  background-color: ${({ isSelected, color, disabled }) =>
    getCategoryButtonColor({ isSelected, color, disabled })};
  color: ${(props) => props.theme.colors.basic.gray100};
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSize.body02};
  cursor: pointer;
  white-space: nowrap;
`;

export default function CategoryButton({
  category,
  isSelected,
  onClick,
  disabled = false,
}: Props) {
  const color = CATEGORY_COLOR_MAP[category.color] || CATEGORY_COLOR_MAP.BLUE;
  return (
    <Button
      color={color}
      isSelected={isSelected}
      onClick={onClick}
      disabled={disabled}
    >
      {category.name}
    </Button>
  );
}

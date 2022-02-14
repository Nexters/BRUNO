import styled from 'styled-components';
import { rgba } from 'polished';

type Props = {
  category: string;
  color: string;
  isSelected: boolean;
};

const Button = styled.button<{ isSelected: boolean; color: string }>`
  width: fit-content;
  height: 40px;
  border: 1px solid ${(props) => props.color};
  padding: 7px 16px;
  border: 1px solid ${(props) => props.color};
  border-radius: 37px;
  background-color: ${({ isSelected, color }) =>
    isSelected ? rgba(color, 0.5) : 'transparent'};
  color: ${(props) => props.theme.colors.basic.gray100};
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSize.body02};
  cursor: pointer;
  white-space: nowrap;
`;

export default function CategoryButton({ category, color, isSelected }: Props) {
  return (
    <Button color={color} isSelected={isSelected}>
      {category}
    </Button>
  );
}

import Icon from '@src/assets/Icon';
import { iconName } from '@src/assets/Icon/const';
import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding: 0;
`;

interface IconButtonProps {
  icon: iconName;
  size: number;
  color?: string;
  noFill?: boolean;
  onClick: () => void;
}

function IconButton({ icon, size, color, noFill, onClick }: IconButtonProps) {
  return (
    <Button onClick={onClick}>
      <Icon icon={icon} size={size} color={color} noFill={noFill} />
    </Button>
  );
}

export default IconButton;

import { ReactNode } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding: 0;
`;

interface IconButtonProps {
  children: ReactNode;
  onClick: () => void;
}

function IconButton({ children, onClick }: IconButtonProps) {
  return <Button onClick={onClick}>{children}</Button>;
}

export default IconButton;

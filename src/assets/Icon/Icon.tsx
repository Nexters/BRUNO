import { ReactNode } from 'react';
import { theme } from '../styles';

type Props = {
  children: ReactNode;
  color?: string;
};

function Icon({ children, color = theme.colors.gray50 }: Props) {
  return <div style={{ stroke: color }}>{children}</div>;
}

export default Icon;

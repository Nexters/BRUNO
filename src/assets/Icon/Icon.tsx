import { ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from '../styles';

type Props = {
  children: ReactNode;
  color?: string;
};

const IconWrapper = styled.div`
  line-height: 0;
`;

function Icon({ children, color = theme.colors.gray50 }: Props) {
  return <IconWrapper style={{ stroke: color }}>{children}</IconWrapper>;
}

export default Icon;

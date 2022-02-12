import { ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from '../styles';

type Props = {
  children: ReactNode;
  color?: string;
  isOn?: boolean;
};

const IconWrapper = styled.div`
  line-height: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Icon({
  children,
  color = theme.colors.basic.gray100,
  isOn = false,
}: Props) {
  return (
    <IconWrapper style={{ stroke: isOn ? '' : color, fill: isOn ? color : '' }}>
      {children}
    </IconWrapper>
  );
}

export default Icon;

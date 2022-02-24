import { ReactNode, CSSProperties } from 'react';
import styled from 'styled-components';
import { theme } from '../styles';

type Props = {
  children: ReactNode;
  color?: string;
  isOn?: boolean;
  style?: CSSProperties;
  svgStyle?: CSSProperties;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IconWrapper = styled.div<{ svgStyle?: any }>`
  line-height: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    ${(props) => props.svgStyle}
  }
`;

function Icon({ children, color = theme.colors.basic.gray100, isOn = false, style, svgStyle }: Props) {
  return (
    <IconWrapper style={{ stroke: isOn ? '' : color, fill: isOn ? color : '', ...style }} svgStyle={svgStyle}>
      {children}
    </IconWrapper>
  );
}

export default Icon;

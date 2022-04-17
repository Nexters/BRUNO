import { iconName, IconSet } from './const';
import { theme } from '../styles';

interface IconProps {
  icon: iconName;
  size: number;
  color?: string;
  noFill?: boolean;
}

function Icon({ icon, size, color = theme.colors.basic.gray100, noFill }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={IconSet[icon].viewBox}
      fill={noFill ? 'transparent' : color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={IconSet[icon].path}
        stroke={color}
        strokeWidth={IconSet[icon].stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Icon;

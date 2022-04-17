import styled from 'styled-components';

import Icon from '@src/assets/Icon';
import { CookieStatus, CategoryColor, Category } from '@src/queries/types';
import { useNavigate } from 'react-router-dom';
import { ACTIVE_COLOR_MAP, HIDDEN_COLOR_MAP, BOX_COLOR_MAP } from './const';

const CookieWrapper = styled.div`
  width: 33.3%;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
  }

  ${(props) => props.theme.media.large} {
    width: 20%;
  }
`;

interface Props {
  id: number;
  category: Category;
  cookieStatus: CookieStatus;
  myCookie: boolean;
  onClickForbidden: () => void;
}

function CookieItem({ id, category, cookieStatus, myCookie, onClickForbidden }: Props) {
  const navigate = useNavigate();
  const categoryColor = category?.color || CategoryColor.BLUE;

  const BoxIcon = BOX_COLOR_MAP[categoryColor];
  const CookieIcon =
    cookieStatus === CookieStatus.ACTIVE ? ACTIVE_COLOR_MAP[categoryColor] : HIDDEN_COLOR_MAP[categoryColor];
  const handleClick = () => {
    if (myCookie || cookieStatus === CookieStatus.ACTIVE) navigate(`/cookie/${id}`);
    else onClickForbidden?.();
  };

  return (
    <CookieWrapper onClick={handleClick}>
      {/* <Icon isOn style={{ position: 'relative' }}>
        <BoxIcon />
        <Icon isOn style={{ position: 'absolute' }} svgStyle={{ width: '100%', height: '100%' }}>
          <CookieIcon />
        </Icon>
      </Icon> */}
    </CookieWrapper>
  );
}

export default CookieItem;

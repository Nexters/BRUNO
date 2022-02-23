import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { categoryColorSelector } from '@src/recoil/category';
import Icon from '@src/assets/Icon';
import { CookieStatus, CategoryColor, Category } from '@src/queries/types';
import { useNavigate } from 'react-router-dom';
import { ACTIVE_COLOR_MAP, HIDDEN_COLOR_MAP, BOX_COLOR_MAP } from './const';

const CookieWrapper = styled.div`
  width: 33.3%;
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
  status: CookieStatus;
}

function CookieItem({ id, category, status }: Props) {
  const navigate = useNavigate();
  const categoryColor = category?.color || CategoryColor.BLUE;

  const BoxIcon = BOX_COLOR_MAP[categoryColor];
  const CookieIcon = status === CookieStatus.ACTIVE ? ACTIVE_COLOR_MAP[categoryColor] : HIDDEN_COLOR_MAP[categoryColor];

  return (
    <CookieWrapper onClick={() => navigate(`/cookie/${id}`)}>
      <Icon isOn style={{ position: 'relative' }}>
        <BoxIcon />
        <Icon isOn style={{ position: 'absolute' }} svgStyle={{ width: '100%', height: '100%' }}>
          <CookieIcon />
        </Icon>
      </Icon>
    </CookieWrapper>
  );
}

export default CookieItem;

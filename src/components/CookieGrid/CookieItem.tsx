import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { categoryColorSelector } from '@src/recoil/category';
import Icon from '@src/assets/Icon';
import { CookieStatus, CategoryColor } from '@src/queries/types';
import { useNavigate } from 'react-router-dom';
import { ACTIVE_COLOR_MAP, HIDDEN_COLOR_MAP, BOX_COLOR_MAP } from './const';

const CookieWrapper = styled.div`
  width: 33.3%;
  svg {
    width: 100%;
    height: 100%;
  }
`;

interface Props {
  id: number;
  categoryId: number;
  status: CookieStatus;
}

function CookieItem({ id, categoryId, status }: Props) {
  const navigate = useNavigate();
  const color = useRecoilValue(categoryColorSelector(categoryId)) || CategoryColor.BLUE;

  const BoxIcon = BOX_COLOR_MAP[color];
  const CookieIcon = status === CookieStatus.ACTIVE ? ACTIVE_COLOR_MAP[color] : HIDDEN_COLOR_MAP[color];

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

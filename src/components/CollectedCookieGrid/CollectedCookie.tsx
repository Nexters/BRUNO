import { useRecoilValue } from 'recoil';
import styled, { css } from 'styled-components';

import { CategoryColor, categoryColorSelector } from '@src/recoil/category';
import Icon from '@src/assets/Icon';
import { CookieStatus } from '@src/queries/types';
import { ACTIVE_COLOR_MAP, HIDDEN_COLOR_MAP, BOX_COLOR_MAP } from './const';

const CookieWrapper = styled.div`
  width: 33.3%;
  svg {
    width: 100%;
    height: 100%;
  }
`;

interface Props {
  categoryId: number;
  status: CookieStatus;
}

function CollectedCookie({ categoryId, status }: Props) {
  const color = useRecoilValue(categoryColorSelector(categoryId)) || CategoryColor.BLUE;
  const BoxIcon = BOX_COLOR_MAP[color];
  const CookieIcon = status === CookieStatus.ACTIVE ? ACTIVE_COLOR_MAP[color] : HIDDEN_COLOR_MAP[color];
  // const getCookieIcon = () => {};

  return (
    <CookieWrapper>
      <Icon isOn style={{ position: 'relative' }}>
        <BoxIcon />
        <Icon isOn style={{ position: 'absolute' }} svgStyle={{ width: '100%', height: '100%' }}>
          <CookieIcon />
        </Icon>
      </Icon>
    </CookieWrapper>
  );
}

export default CollectedCookie;

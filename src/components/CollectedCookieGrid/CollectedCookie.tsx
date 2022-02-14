import styled from 'styled-components';
import Icon, { PinkBox, PurpleBox } from '@src/assets/Icon';

const CookieWrapper = styled.div`
  width: 33.3%;
  svg {
    width: 100%;
    height: 100%;
  }
`;

interface Props {
  index: number;
}

function CollectedCookie({ index }: Props) {
  return (
    <CookieWrapper>
      <Icon>{index % 2 === 0 ? <PinkBox /> : <PurpleBox />}</Icon>
    </CookieWrapper>
  );
}

export default CollectedCookie;

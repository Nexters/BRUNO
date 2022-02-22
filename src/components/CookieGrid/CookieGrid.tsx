import styled from 'styled-components';

import { CookieType } from '@src/queries/types';
import CookieItem from './CookieItem';

const Wrapper = styled.div`
  display: flex;
  flex: 33%;
  flex-wrap: wrap;

  ${(props) => props.theme.media.large} {
    flex: 20%;
  }
`;

function CookieGrid({ cookies = [] }: { cookies: CookieType[] }) {
  return (
    <Wrapper>
      {cookies.map((cookie) => (
        <CookieItem key={cookie.id} id={cookie.id} categoryId={cookie.categoryId} status={cookie.status} />
      ))}
    </Wrapper>
  );
}

export default CookieGrid;

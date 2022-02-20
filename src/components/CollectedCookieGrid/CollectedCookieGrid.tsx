import styled from 'styled-components';

import { useUserInfo } from '@src/queries/hooks';
import CollectedCookie from './CollectedCookie';

const Wrapper = styled.div`
  display: flex;
  flex: 33%;
  flex-wrap: wrap;
`;

function CollectedCookieGrid({ userId }: { userId: string }) {
  const { collectedCookies } = useUserInfo({ userId });

  if (collectedCookies.cookies.length === 0) return null;
  const { cookies } = collectedCookies;

  return (
    <Wrapper>
      {cookies.map((cookie) => (
        <CollectedCookie key={cookie.id} id={cookie.id} categoryId={cookie.categoryId} status={cookie.status} />
      ))}
    </Wrapper>
  );
}

export default CollectedCookieGrid;

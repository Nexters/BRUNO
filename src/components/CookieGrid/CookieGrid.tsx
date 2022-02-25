import styled from 'styled-components';

import { CookieType } from '@src/queries/types';
import { useLogin } from '@src/hooks';
import Modal from '@src/components/shared/Modal';
import { useState } from 'react';
import CookieItem from './CookieItem';

const Wrapper = styled.div`
  display: flex;
  flex: 33%;
  flex-wrap: wrap;

  ${(props) => props.theme.media.large} {
    flex: 20%;
  }
`;

const HIDDEN_COOKIE_LABEL = {
  title: '이 쿠키는 숨겨졌어요..!',
  description: '숨겨진 쿠키는 소유자가 공개할 때까지\n볼 수 없어요. 다른 쿠키를 구경해볼까요?',
  yes: '확인하기',
};

function CookieGrid({ cookies = [] }: { cookies: CookieType[] }) {
  const [modalOpen, setModalOpen] = useState(false);
  const { userId } = useLogin();

  return (
    <Wrapper>
      {cookies.map((cookie) => (
        <CookieItem
          key={cookie.cookieId}
          id={cookie.cookieId}
          category={cookie.category}
          cookieStatus={cookie.cookieStatus}
          myCookie={userId === cookie.ownedUserId}
          onClickForbidden={() => setModalOpen(true)}
        />
      ))}
      <Modal label={HIDDEN_COOKIE_LABEL} onlyYes open={modalOpen} onClickYes={() => setModalOpen(false)} />
    </Wrapper>
  );
}

export default CookieGrid;

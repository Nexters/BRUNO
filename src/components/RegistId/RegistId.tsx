import styled from 'styled-components';
import { useCookies } from 'react-cookie';

import MainButton from '@src/components/shared/MainButton';
import { useState } from 'react';
import { CookieName, useLogin } from '@src/hooks';
import { useMutation } from 'react-query';
import { postUser, PostUserArgs } from '@src/queries/users';
import Input from '../shared/Input';

import { LoginType } from './type';
import { REGIST_TEXT_MAP } from './const';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 66px;
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.fontSize.head02};
  font-weight: 700;
  white-space: pre-wrap;
  color: ${(props) => props.theme.colors.basic.gray90};
  margin-bottom: 40px;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
`;

const GuideLink = styled.a`
  color: ${(props) => props.theme.colors.basic.gray50};
`;

interface Props {
  type: LoginType;
  setStep: (step: number) => void;
}

function RegistId({ type, setStep }: Props) {
  const TEXT = REGIST_TEXT_MAP[type];

  const [nickname, setNickname] = useState<string>('');
  const [_, setCookie] = useCookies([CookieName.USER_ID]);

  const { address } = useLogin();
  const mutation = useMutation((obj: PostUserArgs) => postUser(obj));

  const disabled = nickname.length === 0;
  const handleSubmit = async () => {
    if (disabled) return; // to do : Input invalid 표시

    await mutation.mutate(
      {
        walletAddress: address,
        nickname: nickname.trim(),
      },
      {
        onSuccess: (data) => {
          if (!data?.id) return;
          setCookie(CookieName.USER_ID, data.id);
          setStep(1);
        },
      },
    );
  };

  return (
    <Root>
      <Title>{TEXT.title}</Title>
      <Input
        value={nickname}
        onChange={setNickname}
        label={TEXT.inputLabel}
        placeholder={TEXT.placeholder}
        limit={15}
      />
      <BottomWrapper>
        <GuideLink>{TEXT.guide}</GuideLink>
        <MainButton value={TEXT.button} onClick={handleSubmit} disabled={disabled} />
      </BottomWrapper>
    </Root>
  );
}

export default RegistId;

import styled from 'styled-components';

import MainButton from '@src/components/shared/MainButton';
import { useState } from 'react';
import { useLogin } from '@src/hooks';
import { useMutation } from 'react-query';
import { postUser, PostUserArgs } from '@src/queries/users';
import { useRecoilState } from 'recoil';
import { userAtom } from '@src/recoil/user';
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
  const [_, setUserId] = useRecoilState(userAtom);

  const { address } = useLogin();
  const mutation = useMutation((obj: PostUserArgs) => postUser(obj));

  const registUser = (id: number) => {
    setUserId(id);
    setStep(1);
  };

  const disabled = nickname.length === 0;
  const handleSubmit = () => {
    if (disabled) return; // to do : Input invalid 표시

    mutation.mutate(
      {
        walletAddress: address,
        nickname,
      },
      {
        onSuccess: ({ data }) => {
          const { result } = data;
          registUser(result.id);
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

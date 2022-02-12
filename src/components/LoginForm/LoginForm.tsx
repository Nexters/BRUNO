import { ChangeEvent } from 'react';
import styled from 'styled-components';

import LoginInput from '@src/components/LoginInput';
import MainButton from '@src/components/shared/MainButton';

import { LoginType } from './type';
import { LOGIN_FORM_TEXT_MAP } from './const';

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
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
`;

const GuideLink = styled.a`
  margin: 9px 0 13px 0;
  color: ${(props) => props.theme.colors.basic.gray50};
`;

interface Props {
  type: LoginType;
  onClickLoginButton: () => void;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

function LoginForm({ type, onClickLoginButton, onChangeInput }: Props) {
  const TEXT = LOGIN_FORM_TEXT_MAP[type];

  return (
    <Root>
      <Title>{TEXT.title}</Title>
      <LoginInput
        placeholder={TEXT.placeholder}
        label={TEXT.inputLabel}
        onChange={onChangeInput}
      />
      <BottomWrapper>
        <MainButton value={TEXT.button} onClick={onClickLoginButton} />
        <GuideLink>{TEXT.guide}</GuideLink>
      </BottomWrapper>
    </Root>
  );
}

export default LoginForm;

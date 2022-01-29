import { ChangeEvent } from 'react';
import styled from 'styled-components';

import LoginInput from '@src/components/LoginInput';
import MainButton from '@src/components/shared/MainButton';

import { LoginFormType } from './type';
import { LOGIN_FORM_TEXT_MAP } from './const';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 66px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.gray90};
  & + & {
    margin-top: 19px;
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
`;

const GuideLink = styled.a`
  margin: 9px 0 13px 0;
  color: ${(props) => props.theme.colors.gray50};
`;

interface Props {
  type: LoginFormType;
  onClickLoginButton: () => void;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

function LoginForm({ type, onClickLoginButton, onChangeInput }: Props) {
  const TEXT = LOGIN_FORM_TEXT_MAP[type];

  return (
    <Wrapper>
      <Title>Input</Title>
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
    </Wrapper>
  );
}

export default LoginForm;

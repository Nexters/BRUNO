import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../shared/Input';
import MainButton from '../shared/MainButton';
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

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
`;

const GuideLink = styled.a`
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.basic.gray50};
`;

interface Props {
  value: Record<string, string>;
  setValue: (value: Record<string, string>) => void;
  handleClickButton: () => void;
}

function RegistInfo({ value, setValue, handleClickButton }: Props) {
  const handleChangeLocationInput = (input: string) => {
    setValue({ ...value, location: input });
  };
  const handleChangeHeightInput = (input: string) => {
    setValue({ ...value, height: input });
  };
  const handleChangeJobInput = (input: string) => {
    setValue({ ...value, job: input });
  };

  return (
    <Root>
      <Title>{REGIST_TEXT_MAP.title}</Title>
      <InputWrapper>
        <Input
          value={value.location}
          onChange={handleChangeLocationInput}
          label={REGIST_TEXT_MAP.question.location.inputLabel}
          placeholder={REGIST_TEXT_MAP.question.location.placeholder}
        />
        <Input
          value={value.height}
          onChange={handleChangeHeightInput}
          label={REGIST_TEXT_MAP.question.height.inputLabel}
          placeholder={REGIST_TEXT_MAP.question.height.placeholder}
        />
        <Input
          value={value.job}
          onChange={handleChangeJobInput}
          label={REGIST_TEXT_MAP.question.job.inputLabel}
          placeholder={REGIST_TEXT_MAP.question.job.placeholder}
        />
      </InputWrapper>

      <BottomWrapper>
        <GuideLink>{REGIST_TEXT_MAP.guide}</GuideLink>
        <MainButton
          value={REGIST_TEXT_MAP.button}
          onClick={handleClickButton}
          buttonStyle={{ margin: 0 }}
        />
      </BottomWrapper>
    </Root>
  );
}

export default RegistInfo;

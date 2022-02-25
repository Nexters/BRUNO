import { useLogin } from '@src/hooks';
import { postDefaultCookie, PostDefaultCookieArgs } from '@src/queries/cookies';
import { useState } from 'react';
import { useMutation } from 'react-query';
import styled from 'styled-components';
import Input from '../shared/Input';
import MainButton from '../shared/MainButton';
import { REGIST_TEXT_MAP as TEXT } from './const';

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
  color: ${(props) => props.theme.colors.basic.gray50};
  text-align: center;
  white-space: pre-wrap;
`;

interface Props {
  setStep: (step: number) => void;
}

function RegistInfo({ setStep }: Props) {
  const { userId } = useLogin();
  const mutation = useMutation((obj: PostDefaultCookieArgs) => postDefaultCookie(obj));

  const [info, setInfo] = useState<Record<string, string>>({
    location: '',
    height: '',
    job: '',
  });

  const handleChangeLocationInput = (input: string) => {
    setInfo({ ...info, location: input });
  };
  const handleChangeHeightInput = (input: string) => {
    setInfo({ ...info, height: input });
  };
  const handleChangeJobInput = (input: string) => {
    setInfo({ ...info, job: input });
  };

  const disabled = info.location.length === 0 || info.height.length === 0 || info.job.length === 0;

  const handleSubmit = async () => {
    if (disabled || !userId) return;

    const data = {
      creatorId: userId,
      defaultCookies: [
        {
          question: TEXT.question.location.inputLabel,
          answer: info.location,
        },
        {
          question: TEXT.question.height.inputLabel,
          answer: info.height,
        },
        {
          question: TEXT.question.job.inputLabel,
          answer: info.job,
        },
      ],
    };
    await mutation.mutate(data, { onSuccess: () => setStep(2) });
  };

  return (
    <Root>
      <Title>{TEXT.title}</Title>
      <InputWrapper>
        <Input
          value={info.location}
          onChange={handleChangeLocationInput}
          label={TEXT.question.location.inputLabel}
          placeholder={TEXT.question.location.placeholder}
        />
        <Input
          value={info.height}
          onChange={handleChangeHeightInput}
          label={TEXT.question.height.inputLabel}
          placeholder={TEXT.question.height.placeholder}
        />
        <Input
          value={info.job}
          onChange={handleChangeJobInput}
          label={TEXT.question.job.inputLabel}
          placeholder={TEXT.question.job.placeholder}
        />
      </InputWrapper>

      <BottomWrapper>
        <GuideLink>{TEXT.guide}</GuideLink>
        <MainButton value={TEXT.button} onClick={handleSubmit} disabled={disabled} />
      </BottomWrapper>
    </Root>
  );
}

export default RegistInfo;

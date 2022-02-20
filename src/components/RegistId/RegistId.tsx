import styled from 'styled-components';

import MainButton from '@src/components/shared/MainButton';
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
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.basic.gray50};
`;

interface Props {
  type: LoginType;
  value: string;
  handleClickButton: () => void;
  onChangeInput: (value: string) => void;
}

function RegistId({ type, value, handleClickButton, onChangeInput }: Props) {
  const TEXT = REGIST_TEXT_MAP[type];

  return (
    <Root>
      <Title>{TEXT.title}</Title>
      <Input
        value={value}
        onChange={onChangeInput}
        label={TEXT.inputLabel}
        placeholder={TEXT.placeholder}
        limit={15}
      />
      <BottomWrapper>
        <GuideLink>{TEXT.guide}</GuideLink>
        <MainButton
          value={TEXT.button}
          onClick={handleClickButton}
          buttonStyle={{ margin: 0 }}
        />
      </BottomWrapper>
    </Root>
  );
}

export default RegistId;

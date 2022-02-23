import styled from 'styled-components';
import { NFTError } from '@src/assets/images';
import MainButton from '@src/components/shared/MainButton';
import PageLayout from '@src/components/shared/PageLayout';
import { useNavigate } from 'react-router-dom';
import { ErrorType } from './types';
import { ERROR_TEXT } from './const';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  margin: auto;
  text-align: center;
`;

const Title = styled.div`
  margin: 16px 0 6px 0;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSize.large};
`;
const Text = styled.div`
  white-space: pre-wrap;
  color: ${(props) => props.theme.colors.basic.gray50};
`;

const ImageWrapper = styled.div`
  width: 148px;
  margin: auto;
  img {
    width: 100%;
  }
`;

function Error({ type }: { type: ErrorType }) {
  const navigate = useNavigate();
  const TEXT = ERROR_TEXT[type] || ERROR_TEXT[ErrorType.NOT_FOUND];

  return (
    <Wrapper>
      <Content>
        <ImageWrapper>
          <img src={NFTError} alt="error" />
        </ImageWrapper>
        <Title>{TEXT.title}.</Title>
        <Text>{TEXT.text}</Text>
      </Content>
      <MainButton value="홈으로 가기" buttonStyle={{ margin: 'auto 20px 20px 20px' }} onClick={() => navigate('/')} />
    </Wrapper>
  );
}

export default Error;

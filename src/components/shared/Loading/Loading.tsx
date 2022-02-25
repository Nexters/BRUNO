import styled from 'styled-components';

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
  margin-bottom: 6px;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSize.large};
`;
const Text = styled.div`
  white-space: pre-wrap;
  color: ${(props) => props.theme.colors.basic.gray50};
`;

function Loading() {
  return (
    <Wrapper>
      <Content>
        <Title>로딩중</Title>
        <Text>열심히 로딩중이에요. 조금만 기다려주세요!</Text>
      </Content>
    </Wrapper>
  );
}

export default Loading;

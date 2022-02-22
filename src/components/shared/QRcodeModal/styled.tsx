import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Box = styled.div`
  width: 100%;
  max-width: 700px;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.basic.gray10};
  color: ${(props) => props.theme.colors.basic.gray90};
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 16px;
  font-size: 20px;
  font-weight: 700;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  white-space: pre-wrap;
  text-align: center;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
`;
const Timer = styled.div`
  font-size: 16px;
`;
const Guide = styled.div``;

const QRcodeWrapper = styled.div`
  margin: 40px 0;
`;

const GuideIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  margin-top: 30px;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export { Wrapper, Box, Header, ContentWrapper, Title, Timer, Guide, QRcodeWrapper, GuideIconWrapper, IconWrapper };

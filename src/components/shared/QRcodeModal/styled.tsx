import styled from 'styled-components';
import { MEDIA_SIZE } from '@src/assets/styles';

const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Box = styled.div`
  width: 100%;
  max-width: ${MEDIA_SIZE.mobile}px;
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

const QRcodeWrapper = styled.div`
  margin: 40px 0;
`;

const GuideIconWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 24px 1fr;
  grid-template-rows: 1fr 21px;
  column-gap: 8px;
  row-gap: 15px;
  align-items: center;
  justify-items: center;
  margin-top: 30px;
`;

const IconWrapper = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.brand.sub01};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Root, Box, Header, ContentWrapper, Title, Timer, QRcodeWrapper, GuideIconWrapper, IconWrapper };

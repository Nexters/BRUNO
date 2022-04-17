import styled from 'styled-components';

export const Root = styled.div`
  width: 100%;

  padding: 40px 20px;
  display: grid;
  grid-template-rows: 1fr 48px;
`;

export const BottomWrapper = styled.div`
  width: 100%;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const LogoImage = styled.img`
  width: 190px;
  margin-bottom: 24px;
`;

export const SubText = styled.div`
  margin-top: 8px;
  text-align: center;
  color: ${(props) => props.theme.colors.basic.gray50};
  white-space: pre-wrap;
`;

import styled from 'styled-components';

export const Root = styled.div`
  width: 100%;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  margin-bottom: 40px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: auto;
`;

export const MainLogoImage = styled.img`
  width: 190px;
  margin-bottom: 24px;
`;
export const LogoImage = styled.img`
  width: 120px;
  height: 23px;
  margin-bottom: 12px;
`;

export const SubText = styled.div`
  margin-top: 8px;
  text-align: center;
  color: ${(props) => props.theme.colors.basic.gray50};
  white-space: pre-wrap;
`;

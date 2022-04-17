import styled from 'styled-components';
import { rgba } from 'polished';
import { Button as button } from '@src/components/shared/MainButton';
import { MEDIA_SIZE, theme } from '@src/assets/styles';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background: none;
  * {
    z-index: 10;
  }
`;

export const ModalWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: ${MEDIA_SIZE.mobile}px;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;
  background-color: ${(props) => rgba(props.theme.colors.basic.gray00, 0.75)};
  * {
    z-index: 10;
  }
`;

export const ModalBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 320px;
  max-height: 193px;
  margin: auto;
  padding: 16px;
  align-items: center;
  background-color: ${(props) => props.theme.colors.basic.gray20};
  border-radius: 24px;
  color: ${(props) => props.theme.colors.basic.gray90};
`;

export const AskLabel = styled.div`
  margin-top: 16px;
  font-size: ${(props) => props.theme.fontSize.body01};
  font-weight: 700;
`;

export const DescriptionLabel = styled.div`
  margin: 9px 0 18px 0;
  white-space: pre-wrap;
  text-align: center;
  ${theme.text.ellipsis(2)}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  margin-top: auto;
`;

export const YesButton = styled(button)`
  margin: 0;
`;

export const NoButton = styled(YesButton)`
  background: none;
  background-color: ${(props) => props.theme.colors.basic.gray30};
`;

import styled from 'styled-components';
import { Button as button } from '@src/components/shared/MainButton';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background: none;
`;

export const ModalWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 700px;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;
  background-color: rgba(0, 0, 0, 0.5);
  /* TODO : bg color dimmed 수정 */
`;

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 320px;
  height: 193px;
  margin: auto;
  padding: 16px;
  align-items: center;
  background-color: ${(props) => props.theme.colors.gray20};
  border-radius: 24px;
  color: ${(props) => props.theme.colors.gray90};
`;

export const AskLabel = styled.div`
  margin-top: 16px;
  font-size: ${(props) => props.theme.fontSize.body01};
  font-weight: 700;
`;
export const DescriptionLabel = styled.div`
  margin-top: 9px;
  white-space: pre-wrap;
  text-align: center;
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
  background-color: ${(props) => props.theme.colors.gray30};
`;

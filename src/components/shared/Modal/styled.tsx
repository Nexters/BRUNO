import styled from 'styled-components';
import { rgba } from 'polished';
import { Button as button } from '@src/components/shared/MainButton';
import { MEDIA_SIZE, MEDIA_QUERY, theme } from '@src/assets/styles';

export const Root = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: ${MEDIA_SIZE.mobile}px;
  height: 100%;
  display: flex;
  margin: 0 auto;
  padding: 0 20px;
  background-color: ${(props) => rgba(props.theme.colors.basic.gray00, 0.75)};

  ${MEDIA_QUERY.mobile} {
    left: 0;
  }
  ${MEDIA_QUERY.small} {
    left: 0;
  }
`;

export const ModalBox = styled.div`
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

import styled from 'styled-components';
import { theme } from '@src/assets/styles';

export const Wrapper = styled.div`
  margin: 16px 0;
  padding: 0 20px;
`;
export const AnswerWrapper = styled.div`
  background-color: ${theme.colors.basic.gray20};
  margin-bottom: 16px;
  padding: 20px 20px 16px 20px;
`;

export const Label = styled.div`
  margin-bottom: 6px;
  font-weight: 700;
  font-size: ${theme.fontSize.caption};
  color: ${theme.colors.basic.gray100};
`;

export const AnswerGuide = styled.div`
  margin-top: 18px;
  color: ${theme.colors.basic.gray50};
`;

export const HammerPriceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6px;
`;

export const HammerControlButton = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: ${theme.colors.basic.gray80};
  color: ${theme.colors.basic.gray40};
  cursor: pointer;
`;

export const HammerPrice = styled.div`
  margin: 0 16px;
  width: 100px;
  padding: 11px 0;
  border-radius: 10px;
  border: 1px solid ${theme.colors.basic.gray40};
  font-size: ${theme.fontSize.body01};
  background-color: ${theme.colors.basic.gray10};
  color: ${theme.colors.basic.gray100};
  text-align: center;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

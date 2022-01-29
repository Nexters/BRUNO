import { theme } from '@src/assets/styles';
import styled from 'styled-components';

export const Label = styled.div`
  margin-bottom: 6px;
  font-weight: 700;
  font-size: 13px;
  color: ${(props) => props.theme.colors.gray20};
`;

export const Section = styled.section`
  padding: 16px 20px;
`;

export const QuestionInput = styled.input<{ isEmpty: boolean }>`
  width: 100%;
  padding: 11px 16px;
  border-radius: 10px;
  background-color: ${({ theme, isEmpty }) =>
    isEmpty ? theme.colors.gray80 : theme.colors.gray100};
  ::placeholder {
    color: ${(props) => props.theme.colors.gray50};
  }
`;

export const AnswerSection = styled.section`
  padding: 20px 20px 16px 20px;
  background-color: ${(props) => props.theme.colors.gray90};
`;

export const AnswerInput = styled.textarea<{ hasQuestion: boolean }>`
  width: 100%;
  height: 110px;
  padding: 11px 16px;
  border-radius: 10px;
  background-color: ${({ theme, hasQuestion }) =>
    hasQuestion ? theme.colors.gray100 : theme.colors.gray80};
  ::placeholder {
    color: ${(props) => props.theme.colors.gray60};
  }
`;

export const AnswerGuide = styled.div`
  margin-top: 18px;
  color: ${(props) => props.theme.colors.gray40};
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
  border-radius: 100%;
  background-color: ${(props) => props.theme.colors.gray80};
  color: ${(props) => props.theme.colors.gray40};
`;

export const HammperPrice = styled.div`
  margin: 0 16px;
  padding: 11px 46px;
  border-radius: 10px;
  border: 1px solid #f2f2f4;
  font-size: 16px;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 8px;
`;

export const CategoryButton = styled.button<{ isSelected: boolean }>`
  padding: 7px 16px;
  border-radius: 37px;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.gray10 : theme.colors.gray90};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.gray100 : theme.colors.gray50};
  line-height: 160%;
`;

export const CreateButtonStyle = {
  background: 'none',
  'background-color': theme.colors.gray20,
  margin: '20px',
};

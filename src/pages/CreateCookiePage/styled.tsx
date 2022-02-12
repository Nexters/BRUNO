import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 16px 0;
  padding: 0 20px;
`;
export const AnswerWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.basic.gray20};
  margin-bottom: 16px;
  padding: 20px 20px 16px 20px;
`;

export const Label = styled.div`
  margin-bottom: 6px;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSize.caption};
  color: ${(props) => props.theme.colors.basic.gray100};
`;

export const QuestionInput = styled.input<{ isEmpty: boolean }>`
  width: 100%;
  padding: 11px 16px;
  border-radius: 10px;
  background-color: ${({ theme, isEmpty }) =>
    isEmpty ? theme.colors.basic.gray80 : theme.colors.basic.gray100};
  ::placeholder {
    color: ${(props) => props.theme.colors.basic.gray50};
  }
`;

export const AnswerInput = styled.textarea<{ hasQuestion: boolean }>`
  width: 100%;
  height: 110px;
  padding: 11px 16px;
  border-radius: 10px;
  background-color: ${({ theme, hasQuestion }) =>
    hasQuestion ? theme.colors.basic.gray100 : theme.colors.basic.gray80};
  ::placeholder {
    color: ${(props) => props.theme.colors.basic.gray60};
  }
`;

export const AnswerGuide = styled.div`
  margin-top: 18px;
  color: ${(props) => props.theme.colors.basic.gray50};
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
  background-color: ${(props) => props.theme.colors.basic.gray80};
  color: ${(props) => props.theme.colors.basic.gray40};
`;

export const HammerPrice = styled.div`
  margin: 0 16px;
  width: 100px;
  padding: 11px 0;
  border-radius: 10px;
  border: 1px solid #13161b;
  font-size: ${(props) => props.theme.fontSize.body01};
  background-color: ${(props) => props.theme.colors.basic.gray10};
  color: ${(props) => props.theme.colors.basic.gray100};
  text-align: center;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

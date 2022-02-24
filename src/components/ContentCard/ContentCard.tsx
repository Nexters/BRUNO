import styled from 'styled-components';
import { CategoryColor } from '@src/queries/types';

const BACKGROUND_MAP: { [key in CategoryColor]: string } = {
  [CategoryColor.PURPLE]: 'linear-gradient(180deg, #EEB9EC 0%, #8856D9 100%);',
  [CategoryColor.PINK]: 'linear-gradient(180deg, #92E4D3 0%, #A43AD4 100%);',
  [CategoryColor.LIME]: 'linear-gradient(180deg, #E4DD5F 0%, #56D9CC 100%);',
  [CategoryColor.BLUE]: 'linear-gradient(180deg, #4FA5F4 0%, #3EA0B6 40.1%, #450DBC 100%);',
};

const Content = styled.div<{ categoryColor: CategoryColor }>`
  display: flex;
  width: 100%;
  height: 111px;
  margin-left: 8px;
  padding: 8px;
  background: ${({ categoryColor }) => BACKGROUND_MAP[categoryColor]};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  color: ${({ categoryColor, theme }) =>
    categoryColor === CategoryColor.LIME ? theme.colors.basic.gray10 : theme.colors.basic.gray90};
  font-size: ${(props) => props.theme.fontSize.body01};
  font-weight: 700;
`;

const Text = styled.div`
  margin: auto 0 auto 3px;
  font-weight: 400;
`;

type Props = {
  content: string;
  categoryColor: CategoryColor;
};

export default function ContentCard({ content, categoryColor }: Props) {
  return (
    <Content categoryColor={categoryColor}>
      A. <Text>{content}</Text>
    </Content>
  );
}

import styled from 'styled-components';

const Tab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin-bottom: -2px;
  padding-top: 10px;
  color: ${({ theme }) => theme.colors.basic.gray70};
  cursor: pointer;
`;

const Line = styled.hr<{ isActive?: boolean }>`
  width: 100%;
  margin: 10px 0 0 0;
  border-radius: 4px 4px 4px 4px;
  border-bottom: ${({ isActive, theme }) =>
    isActive && `2px solid ${theme.colors.brand.sub03}`}; ;
`;

const Number = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

interface Props {
  isActive: boolean;
  onClick?: () => void;
  name: string;
  count: number;
}

function TabItem({ isActive, onClick, name, count }: Props) {
  return (
    <Tab onClick={() => onClick?.()}>
      <Number>{count}</Number>
      <div>{name}</div>
      <Line isActive={isActive} />
    </Tab>
  );
}

export default TabItem;

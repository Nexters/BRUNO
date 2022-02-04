import styled from 'styled-components';

type Props = {
  category: string;
  color: string;
};

const Button = styled.button`
  width: fit-content;
  height: 40px;
  border: 1px solid ${(props) => props.color};
  padding: 7px 16px;
  border: 1px solid ${(props) => props.color};
  border-radius: 37px;
  background-color: transparent;
  color: ${(props) => props.theme.colors.gray100};
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSize.body02};
  cursor: pointer;
  white-space: nowrap;
`;

export default function CategoryButton({ category, color }: Props) {
  return <Button color={color}>{category}</Button>;
}

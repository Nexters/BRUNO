import { ChangeEvent, HTMLInputTypeAttribute, useCallback } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 24px;
`;

const Label = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.basic.gray90}; ;
`;

const Input = styled.input`
  width: 100%;
  margin: 6px 0;
  padding: 11px;
  background: none;
  border-radius: 10px;
  border: 1px solid #292a2c;
  font-size: ${(props) => props.theme.fontSize.body01};
  color: ${(props) => props.theme.colors.basic.gray100};
  ::placeholder {
    color: ${(props) => props.theme.colors.basic.gray40};
  }
`;

interface Props {
  type?: HTMLInputTypeAttribute;
  name?: string;
  label?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function LoginInput({ type, name, label, placeholder, onChange }: Props) {
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  }, []);

  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        type={type || 'text'}
        name={name || 'privateKey'}
        placeholder={placeholder || '0x2c4078447...'}
        onChange={handleChange}
      />
    </Wrapper>
  );
}

export default LoginInput;

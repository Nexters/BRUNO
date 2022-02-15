import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

type Props = {
  value: string;
  infoKey: string;
  onChange: (key: string, value: string) => void;
  label?: string;
  placeholder?: string;
  limit?: number;
  disabled?: boolean;
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: ${(props) => props.theme.fontSize.caption};
  font-weight: 700;
  color: ${(props) => props.theme.colors.basic.gray90};
`;

const LengthCounter = styled.span`
  font-weight: 400;
  color: ${(props) => props.theme.colors.state.error};
`;

const TextAreaWrapper = styled.div`
  height: 110px;
  border-radius: 10px;
  background-image: ${(props) => props.theme.colors.brand.main};
`;

const TextAreaComponent = styled.textarea<{
  error: boolean;
}>`
  width: 100%;
  height: 110px;
  margin: 0;
  padding: 11px 16px;
  border: 1px solid
    ${({ theme, error }) =>
      error ? theme.colors.state.error : theme.colors.basic.gray40};
  border-radius: 10px;
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.basic.gray30 : theme.colors.basic.gray10};
  color: ${(props) => props.theme.colors.basic.gray60};
  &:focus {
    width: ${({ error }) => (error ? '100%' : 'calc(100% - 4px)')};
    height: ${({ error }) => (error ? '110px' : 'calc(100% - 4px)')};
    margin: ${({ error }) => (error ? 0 : '2px')};
  }
  ::placeholder {
    color: ${(props) => props.theme.colors.basic.gray40};
  }
`;

export default function TextArea({
  value,
  infoKey,
  onChange,
  label,
  placeholder,
  limit,
  disabled = false,
}: Props) {
  const [error, setError] = useState<boolean>(false);
  const isCloseLimit = !!(limit && value.length >= limit - 5);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (!limit || e.target.value.length <= limit) {
      onChange(infoKey, e.target.value);

      if (error) setError(false);
    } else {
      onChange(infoKey, value);
      setError(true);
    }
  };

  return (
    <Root>
      <InfoWrapper>
        {label}
        {limit && isCloseLimit && (
          <LengthCounter>
            {value.length}/{limit}
          </LengthCounter>
        )}
      </InfoWrapper>

      <TextAreaWrapper>
        <TextAreaComponent
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          error={error}
          disabled={disabled}
        />
      </TextAreaWrapper>
    </Root>
  );
}

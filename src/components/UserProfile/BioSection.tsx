import styled from 'styled-components';

type Props = {
  nickname: string;
  introduction: string;
};

const Wrapper = styled.div`
  padding: 12px 20px;
`;

const Nickname = styled.div`
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: 700;
  color: ${(props) => props.theme.colors.basic.gray90};
`;

const Bio = styled.div`
  font-size: ${(props) => props.theme.fontSize.body01};
  color: ${(props) => props.theme.colors.basic.gray60};
`;

function BioSection({ nickname, introduction }: Props) {
  return (
    <Wrapper>
      <Nickname>{nickname}</Nickname>
      <Bio>{introduction}</Bio>
    </Wrapper>
  );
}

export default BioSection;

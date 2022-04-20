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
  font-size: ${(props) => props.theme.fontSize.body02};
  color: ${(props) => props.theme.colors.basic.gray50};
`;

function BioSection({ nickname, introduction }: Props) {
  return (
    <Wrapper>
      <Nickname>{nickname}</Nickname>
      <Bio>{introduction || '아직 입력한 소개글이 없어요.'}</Bio>
    </Wrapper>
  );
}

export default BioSection;

import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 12px 16px;
`;

const Nickname = styled.div`
  font-size: ${(props) => props.theme.fontSize.title02};
  font-weight: 700;
  color: ${(props) => props.theme.colors.basic.gray90};
`;

const Bio = styled.div`
  font-size: ${(props) => props.theme.fontSize.body01};
  color: ${(props) => props.theme.colors.basic.gray60};
`;

function BioSection() {
  return (
    <Wrapper>
      <Nickname>상일동 치타</Nickname>
      <Bio>상일동에서 거주하는 상일동 치타입니다.</Bio>
    </Wrapper>
  );
}

export default BioSection;

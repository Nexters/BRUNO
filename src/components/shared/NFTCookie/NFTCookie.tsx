import styled from 'styled-components';
import { NFTPink, NFTLime, NFTBlue, NFTPurple } from '@src/assets/images';
import { CategoryColor } from '@src/queries/types';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CookieImage = styled.img<{ width?: string }>`
  width: ${({ width }) => width || '288px'};
  height: ${({ width }) => (width ? '99px' : '176px')};
`;

type Props = {
  categoryColor: CategoryColor;
  width?: string;
};

const NFT_COOKIE_MAP = {
  [CategoryColor.BLUE]: NFTBlue,
  [CategoryColor.LIME]: NFTLime,
  [CategoryColor.PINK]: NFTPink,
  [CategoryColor.PURPLE]: NFTPurple,
};

export default function NFTCookie({ categoryColor, width }: Props) {
  const cookieImage = NFT_COOKIE_MAP[categoryColor];

  return (
    <Wrapper>
      <CookieImage src={cookieImage} width={width} />
    </Wrapper>
  );
}

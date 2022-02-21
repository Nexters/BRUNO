import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { NFTPink, NFTLime, NFTBlue, NFTPurple } from '@src/assets/images';
import { CategoryColor } from '@src/queries/types';
import { useRecoilValue } from 'recoil';
import { categoryColorSelector } from '@src/recoil/category';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CookieImage = styled.img<{ width?: string }>`
  width: ${({ width }) => width || '288px'};
`;

type Props = {
  cookieId: number;
  categoryId: number;
  width?: string;
};

const NFT_COOKIE_MAP = {
  [CategoryColor.BLUE]: NFTBlue,
  [CategoryColor.LIME]: NFTLime,
  [CategoryColor.PINK]: NFTPink,
  [CategoryColor.PURPLE]: NFTPurple,
};

export default function FeedContent({ cookieId, categoryId, width }: Props) {
  const navigate = useNavigate();
  const color = useRecoilValue(categoryColorSelector(categoryId)) || CategoryColor.BLUE;
  const cookieImage = NFT_COOKIE_MAP[color];

  const handleAnswerClick = () => {
    navigate(`/cookie/${cookieId}`);
  };

  return (
    <Wrapper>
      <CookieImage src={cookieImage} onClick={handleAnswerClick} width={width} />
    </Wrapper>
  );
}

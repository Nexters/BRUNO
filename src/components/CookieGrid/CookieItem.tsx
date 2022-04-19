import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CookieStatus, CategoryColor, Category } from '@src/queries/types';
import { ACTIVE_COLOR_MAP, HIDDEN_COLOR_MAP } from './const';

const CookieWrapper = styled.img`
  width: 33.3%;
  cursor: pointer;
  ${(props) => props.theme.media.large} {
    width: 20%;
  }
`;

interface Props {
  id: number;
  category: Category;
  cookieStatus: CookieStatus;
  myCookie: boolean;
  onClickForbidden: () => void;
}

function CookieItem({ id, category, cookieStatus, myCookie, onClickForbidden }: Props) {
  const navigate = useNavigate();
  const categoryColor = category?.color || CategoryColor.BLUE;

  const CookieImg =
    cookieStatus === CookieStatus.ACTIVE ? ACTIVE_COLOR_MAP[categoryColor] : HIDDEN_COLOR_MAP[categoryColor];
  const handleClick = () => {
    if (myCookie || cookieStatus === CookieStatus.ACTIVE) navigate(`/cookie/${id}`);
    else onClickForbidden?.();
  };

  return <CookieWrapper src={CookieImg} onClick={handleClick} />;
}

export default CookieItem;

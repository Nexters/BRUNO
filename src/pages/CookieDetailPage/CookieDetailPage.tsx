import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useQuery } from 'react-query';

import Icon, { View24 } from '@src/assets/Icon';
import { theme } from '@src/assets/styles';
import CookieDetails from '@src/components/CookieDetails';
import CategoryButton from '@src/components/shared/CategoryButton';
import { getCookieDetail } from '@src/queries/cookies';
import { CookieDetail } from '@src/queries/types';
import { useLogin } from '@src/hooks';
import Error, { ErrorType } from '@src/components/shared/Error';
import Loading from '@src/components/shared/Loading';

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;
`;

const ViewCountWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const ViewCountText = styled.span`
  margin-left: 5px;
  color: ${(props) => props.theme.colors.basic.gray60};
`;

type CookieDetailParams = { cookieId: string };

function CookieDetailPage() {
  const { userId } = useLogin();
  const { cookieId } = useParams<CookieDetailParams>() as CookieDetailParams;

  const { data, error } = useQuery<CookieDetail, number>(['cookie', 'detail'], () =>
    getCookieDetail({ userId, cookieId: +cookieId }),
  );

  if (error || error === 403) return <Error type={ErrorType.FORBIDDEN} />;
  if (!data) return <Loading />;

  return (
    <>
      <CategoryWrapper>
        <CategoryButton isSelected category={data?.category} />
        <ViewCountWrapper>
          <Icon color={theme.colors.basic.gray60}>
            <View24 />
          </Icon>
          <ViewCountText>{data?.viewCount}</ViewCountText>
        </ViewCountWrapper>
      </CategoryWrapper>
      <CookieDetails data={data} />
    </>
  );
}

export default CookieDetailPage;

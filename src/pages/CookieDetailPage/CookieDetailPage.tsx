import Icon, { View24 } from '@src/assets/Icon';
import { theme } from '@src/assets/styles';
import CookieInfo from '@src/components/CookieInfo';
import Header from '@src/components/Header';
import Navigation from '@src/components/Navigation';
import CategoryButton from '@src/components/shared/CategoryButton';
import PageLayout from '@src/components/shared/PageLayout';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0 16px;
`;
const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 0;
`;

const ViewCountWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const ViewCountText = styled.span`
  margin-left: 5px;
  color: ${(props) => props.theme.colors.gray60};
`;

function CookieDetailPage() {
  return (
    <PageLayout>
      <Header />
      <Navigation />

      <Wrapper>
        <CategoryWrapper>
          <CategoryButton isSelected category="Free Chat" color="#3E6DFE" />

          <ViewCountWrapper>
            <Icon color={theme.colors.gray60}>
              <View24 />
            </Icon>
            <ViewCountText>123</ViewCountText>
          </ViewCountWrapper>
        </CategoryWrapper>

        <CookieInfo />
      </Wrapper>
    </PageLayout>
  );
}

export default CookieDetailPage;

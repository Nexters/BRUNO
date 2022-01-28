import React from 'react';
import styled from 'styled-components';

import LoginForm from '@src/components/LoginForm';
import PageLayout from '@src/components/shared/PageLayout';

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0.002em;
  color: ${(props) => props.theme.colors.gray90};
`;

function OtherWalletPage() {
  return (
    <PageLayout padding="20px">
      <Title>
        Input
        <br /> Your Wallet Address
      </Title>
      <LoginForm />
    </PageLayout>
  );
}

export default OtherWalletPage;

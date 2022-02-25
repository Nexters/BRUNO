import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';

import { useExecuteContract, HammerMethod } from '@src/klip';
import { useQRcodeModal } from '@src/components/shared/QRcodeModal';
import PageLayout from '@src/components/shared/PageLayout';
import { HeaderPage } from '@src/components/Header/const';
import MainButton from '@src/components/shared/MainButton';
import { useLogin, CookieName } from '@src/hooks';
import Modal from '@src/components/shared/Modal';
import { getApproval } from '@src/klip/axios';
import { useRecoilValue } from 'recoil';
import { userBalanceSelector } from '@src/recoil/balance';
import { ApprovalStage, MODAL_LABEL_MAP } from './const';

const CoinWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 11px 16px;
  border-radius: 10px;
  color: ${(props) => props.theme.colors.basic.gray90};
  background-color: ${(props) => props.theme.colors.basic.gray20};
  & + & {
    margin: 20px 0;
  }
`;

const Amount = styled.span`
  font-size: ${(props) => props.theme.fontSize.body01};
  font-weight: 700;
`;

const LogoutWrapper = styled(CoinWrapper)`
  background: none;
  border: 1px solid ${(props) => props.theme.colors.basic.gray30};
`;

const LogoutButton = styled.button`
  color: ${(props) => props.theme.colors.basic.gray50};
`;

const getAccessButtonText = (stage: ApprovalStage) => {
  if (isMobile) return '지갑 권한 허용하기';
  if (stage === ApprovalStage.INITIAL) return 'QR코드 찍기';
  if (stage === ApprovalStage.ALREADY_SUCCESS) return '지갑 권한을 이미 허용하셨어요';
  return '지갑 권한 허용하기';
};

function SettingPage() {
  const navigate = useNavigate();
  const { isApproval, userId, address, logout } = useLogin();
  const { isOpen, setOpen, setClose } = useQRcodeModal();
  const [_, setCookie] = useCookies([CookieName.IS_APPROVAL]);

  const [stage, setStage] = useState<ApprovalStage>(isApproval ? ApprovalStage.ALREADY_SUCCESS : ApprovalStage.INITIAL);
  const { fetchPrepare, fetchResult, openDeepLink } = useExecuteContract({
    method: HammerMethod.MAX_APPROVE,
    userId,
  });
  const balance = useRecoilValue(userBalanceSelector(userId as number));

  const isModalOpen = stage === ApprovalStage.REQUEST_FAIL || stage === ApprovalStage.SUCCESS;

  const requestApproval = async () => {
    const resultFunc = () => getApproval(userId);
    const approvalResult = await fetchResult(resultFunc);
    if (!approvalResult) setStage(ApprovalStage.REQUEST_FAIL);
    else {
      setCookie(CookieName.IS_APPROVAL, true);
      setStage(ApprovalStage.SUCCESS);
    }
  };

  const handleClickAccess = async () => {
    if (stage === ApprovalStage.INITIAL) {
      const reqKey = await fetchPrepare({});

      if (!reqKey) {
        setStage(ApprovalStage.REQUEST_FAIL);
        return;
      }
      if (isMobile) {
        openDeepLink(reqKey);
        setStage(ApprovalStage.REQUEST);
      } else {
        setOpen();
        setStage(ApprovalStage.PREPARE);
      }
    } else if (stage === ApprovalStage.REQUEST) {
      requestApproval();
    }
  };

  const handleClickModal = (yes: boolean) => {
    if (yes && stage === ApprovalStage.SUCCESS) setStage(ApprovalStage.ALREADY_SUCCESS);
    else if (yes) setStage(ApprovalStage.INITIAL);
    else navigate('/');
  };

  useEffect(() => {
    if (stage === ApprovalStage.PREPARE && !isOpen) {
      setStage(ApprovalStage.REQUEST);
    }
  }, [isOpen]);

  useEffect(
    () => () => {
      setClose();
    },
    [],
  );

  return (
    <PageLayout padding="20px" pageType={HeaderPage.SETTING} onlyContents>
      {/* TODO : API 적용 */}
      <CoinWrapper>
        클레이튼
        <Amount>{balance.klay} 클레이</Amount>
      </CoinWrapper>
      <CoinWrapper>
        망치
        <Amount>{balance.hammer} 톤</Amount>
      </CoinWrapper>
      <MainButton
        value={getAccessButtonText(stage)}
        buttonStyle={{ margin: 0 }}
        disabled={isApproval}
        onClick={handleClickAccess}
      />
      <MainButton value="망치 구매하기" disabled />
      {/* TODO 연동해제  */}
      <LogoutWrapper>
        <span>{`${address.slice(0, 18)}..`}</span>
        <LogoutButton
          onClick={() => {
            logout();
            navigate('/login');
          }}
        >
          연동 해제
        </LogoutButton>
      </LogoutWrapper>
      {/* 지갑 연동을 위한 Modal */}
      <Modal
        label={MODAL_LABEL_MAP[stage]}
        open={isModalOpen}
        onlyYes={stage === ApprovalStage.SUCCESS}
        onClickYes={() => handleClickModal(true)}
        onClickNo={() => handleClickModal(false)}
      />
    </PageLayout>
  );
}

export default SettingPage;

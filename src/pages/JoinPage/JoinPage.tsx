import { useMemo, useState } from 'react';

import PageLayout from '@src/components/shared/PageLayout';
import { HeaderPage } from '@src/components/Header/const';
import RegistId from '@src/components/RegistId';
import { LoginType } from '@src/components/RegistId/type';
import RegistInfo from '@src/components/RegisterInfo';

function JoinPage() {
  const [step, setStep] = useState<number>(0);
  const [profileId, setProfileId] = useState<string>('');

  const validateId = useMemo(() => {
    if (profileId === '') return false;
    return true;
  }, [profileId]);

  const toNextStep = () => {
    if (step === 0) {
      if (!validateId) return; // to do : Input invalid 표시
    }
    setStep(step + 1);
  };

  return (
    <PageLayout padding="20px" pageType={HeaderPage.JOIN} onlyContents>
      {step === 0 && (
        <RegistId
          type={LoginType.KLIP}
          value={profileId}
          handleClickButton={toNextStep}
          onChangeInput={setProfileId}
        />
      )}

      {step === 1 && <RegistInfo />}
    </PageLayout>
  );
}

export default JoinPage;

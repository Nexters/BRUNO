import { useState } from 'react';
import PageLayout from '@src/components/shared/PageLayout';
import { HeaderPage } from '@src/components/Header/const';
import RegistId from '@src/components/RegistId';
import { LoginType } from '@src/components/RegistId/type';
import RegistInfo from '@src/components/RegisterInfo';
import SelectCategory from '@src/components/SelectCategory';

function JoinPage() {
  const [step, setStep] = useState<number>(0);

  return (
    <PageLayout padding="20px" pageType={HeaderPage.JOIN} onlyContents>
      {step === 0 && <RegistId type={LoginType.KLIP} setStep={setStep} />}
      {step === 1 && <RegistInfo setStep={setStep} />}
      {step === 2 && <SelectCategory />}
    </PageLayout>
  );
}

export default JoinPage;

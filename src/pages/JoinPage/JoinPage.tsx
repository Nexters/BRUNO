import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { categoryListSelector } from '@src/recoil/category';

import PageLayout from '@src/components/shared/PageLayout';
import { HeaderPage } from '@src/components/Header/const';
import RegistId from '@src/components/RegistId';
import { LoginType } from '@src/components/RegistId/type';
import RegistInfo from '@src/components/RegisterInfo';
import SelectCategory from '@src/components/SelectCategory';

function JoinPage() {
  const navigate = useNavigate();

  const [step, setStep] = useState<number>(0);
  const [profileId, setProfileId] = useState<string>('');
  const [info, setInfo] = useState<Record<string, string>>({
    location: '',
    height: '',
    job: '',
  });

  const categoryList = useRecoilValue(categoryListSelector);
  const [selectedCategory, setSelectedCategory] = useState<number[]>([]);

  const regist = () => {
    // to do : 회원 regist api 연동
    // navigate('/tutorial');
  };

  const toNextStep = () => {
    if (step === 0) {
      if (profileId.length === 0) return; // to do : Input invalid 표시
      setStep(step + 1);
    } else if (step === 1) {
      if (info.location.length === 0 || info.height.length === 0 || info.job.length === 0) return;
      setStep(step + 1);
    } else {
      if (selectedCategory.length <= 3) return;
      regist();
    }
  };

  const handleClickCategory = (id: number) => {
    if (selectedCategory.some((categoryId) => categoryId === id)) {
      setSelectedCategory(selectedCategory.filter((categoryId) => categoryId !== id));
    } else {
      setSelectedCategory(selectedCategory.concat(id));
    }
  };

  return (
    <PageLayout padding="20px" pageType={HeaderPage.JOIN} onlyContents>
      {step === 0 && (
        <RegistId type={LoginType.KLIP} value={profileId} handleClickButton={toNextStep} onChangeInput={setProfileId} />
      )}

      {step === 1 && <RegistInfo value={info} setValue={setInfo} handleClickButton={toNextStep} />}

      {step === 2 && (
        <SelectCategory
          category={categoryList}
          selected={selectedCategory}
          handleClickCategory={handleClickCategory}
          handleClickNext={toNextStep}
        />
      )}
    </PageLayout>
  );
}

export default JoinPage;

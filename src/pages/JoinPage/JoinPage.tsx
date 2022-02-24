import { useState } from 'react';

import PageLayout from '@src/components/shared/PageLayout';
import { HeaderPage } from '@src/components/Header/const';
import RegistId from '@src/components/RegistId';
import { LoginType } from '@src/components/RegistId/type';
import RegistInfo from '@src/components/RegisterInfo';
import SelectCategory from '@src/components/SelectCategory';
import { useNavigate } from 'react-router-dom';

function JoinPage() {
  const navigate = useNavigate();

  const [step, setStep] = useState<number>(0);
  const [profileId, setProfileId] = useState<string>('');
  const [info, setInfo] = useState<Record<string, string>>({
    location: '',
    height: '',
    job: '',
  });
  const [category, _setCategory] = useState([
    {
      id: 0,
      name: '자유',
      color: 'BLUE',
    },
  ]); // server에서 받아온 category 정보
  const [selectedCategory, setSelectedCategory] = useState<number[]>([]);

  const validateId = () => {
    if (profileId === '') return false;
    return true;
  };

  const toNextStep = () => {
    if (step === 0) {
      if (!validateId) return; // to do : Input invalid 표시
    }
    setStep(step + 1);
  };

  const handleClickCategory = (id: number) => {
    if (selectedCategory.some((categoryId) => categoryId === id)) {
      setSelectedCategory(selectedCategory.filter((categoryId) => categoryId !== id));
    } else {
      setSelectedCategory(selectedCategory.concat(id));
    }
  };

  const regist = () => {
    // to do : 회원 regist api 연동
    navigate('/tutorial');
  };

  return (
    <PageLayout padding="20px" pageType={HeaderPage.JOIN} onlyContents>
      {step === 0 && (
        <RegistId type={LoginType.KLIP} value={profileId} handleClickButton={toNextStep} onChangeInput={setProfileId} />
      )}

      {step === 1 && <RegistInfo value={info} setValue={setInfo} handleClickButton={toNextStep} />}

      {step === 2 && (
        <SelectCategory
          category={category}
          selected={selectedCategory}
          handleClickCategory={handleClickCategory}
          handleClickNext={regist}
        />
      )}
    </PageLayout>
  );
}

export default JoinPage;

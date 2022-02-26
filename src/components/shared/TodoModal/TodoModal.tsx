import { useRecoilState } from 'recoil';
import { unimplementedModalAtom } from '@src/recoil/ui';
import { UNIMPLEMENT_MODAL_LABEL } from '../const';
import { Container, ModalWrapper, ModalBox, AskLabel, DescriptionLabel, ButtonWrapper, YesButton } from './styled';

export interface ModalLabel {
  title: string;
  description: string;
  yes: string;
  no?: string;
}

function TodoModal() {
  const [feature, setFeature] = useRecoilState(unimplementedModalAtom);
  const isOpen = !!feature;

  if (!isOpen) return null;

  const { title, description, yes } = UNIMPLEMENT_MODAL_LABEL(feature) || {};
  const handleClickYes = () => setFeature('');

  return (
    <Container>
      <ModalWrapper>
        <ModalBox>
          <AskLabel>{title}</AskLabel>
          <DescriptionLabel>{description}</DescriptionLabel>
          <ButtonWrapper>
            <YesButton onClick={handleClickYes}>{yes}</YesButton>
          </ButtonWrapper>
        </ModalBox>
      </ModalWrapper>
    </Container>
  );
}

export default TodoModal;

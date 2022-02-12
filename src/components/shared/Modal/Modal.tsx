import { useState } from 'react';
import {
  Container,
  ModalWrapper,
  ModalBox,
  AskLabel,
  DescriptionLabel,
  ButtonWrapper,
  NoButton,
  YesButton,
} from './styled';

interface ModalLabel {
  ask: string;
  description: string;
  yes: string;
  no?: string;
}

interface Props {
  open: boolean;
  label: ModalLabel;
  onClickYes?: () => void;
}

function Modal({ open, label, onClickYes }: Props) {
  const [isOpen, setOpen] = useState(open);
  const { ask, description, yes, no = '취소하기' } = label;

  if (!isOpen) return null;

  return (
    <Container>
      <ModalWrapper>
        <ModalBox>
          <AskLabel>{ask}</AskLabel>
          <DescriptionLabel>{description}</DescriptionLabel>
          <ButtonWrapper>
            <NoButton onClick={() => setOpen(false)}>{no}</NoButton>
            <YesButton onClick={onClickYes}>{yes}</YesButton>
          </ButtonWrapper>
        </ModalBox>
      </ModalWrapper>
    </Container>
  );
}

export default Modal;

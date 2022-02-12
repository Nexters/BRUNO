import { useEffect, useState } from 'react';
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

export interface ModalLabel {
  title: string;
  description: string;
  yes: string;
  no?: string;
}

interface Props {
  open: boolean;
  label: ModalLabel;
  onClickYes?: () => void;
  onClickNo?: () => void;
}

function Modal({ open, label, onClickYes, onClickNo }: Props) {
  const [isOpen, setOpen] = useState(open);

  useEffect(() => {
    setOpen(open);
  }, [open]);

  if (!isOpen) return null;

  const { title, description, yes, no = '취소하기' } = label || {};
  const handleClickYes = () => onClickYes?.();
  const handleClickNo = () => {
    onClickNo?.();
    setOpen(false);
  };

  return (
    <Container>
      <ModalWrapper>
        <ModalBox>
          <AskLabel>{title}</AskLabel>
          <DescriptionLabel>{description}</DescriptionLabel>
          <ButtonWrapper>
            <NoButton onClick={handleClickNo}>{no}</NoButton>
            <YesButton onClick={handleClickYes}>{yes}</YesButton>
          </ButtonWrapper>
        </ModalBox>
      </ModalWrapper>
    </Container>
  );
}

export default Modal;

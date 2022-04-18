import { useEffect, useState } from 'react';
import { Root, ModalBox, AskLabel, DescriptionLabel, ButtonWrapper, NoButton, YesButton } from './styled';

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
  onlyYes?: boolean;
}

function Modal({ open, label, onClickYes, onClickNo, onlyYes }: Props) {
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
    <Root>
      <ModalBox>
        <AskLabel>{title}</AskLabel>
        <DescriptionLabel>{description}</DescriptionLabel>
        <ButtonWrapper>
          {!onlyYes && <NoButton onClick={handleClickNo}>{no}</NoButton>}
          <YesButton onClick={handleClickYes}>{yes}</YesButton>
        </ButtonWrapper>
      </ModalBox>
    </Root>
  );
}

export default Modal;

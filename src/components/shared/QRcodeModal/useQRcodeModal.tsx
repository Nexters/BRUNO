import { useRecoilState } from 'recoil';

import { QRcodeModalAtom } from '@src/recoil/ui';

export const useQRcodeModal = () => {
  const [isOpen, _setOpen] = useRecoilState(QRcodeModalAtom);

  const setOpen = () => _setOpen(true);
  const setClose = () => _setOpen(false);

  return { isOpen, setOpen, setClose };
};

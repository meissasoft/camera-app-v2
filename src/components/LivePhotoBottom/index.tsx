import { useEffect, useState } from 'react';

import { useTranslation } from 'next-i18next';

import { DoneIcon } from '@/assets/svg/done-icon';
import { CameraTextStyled, DivCameraTextStyled, IconContainer } from './index.style';

/**
 *
 * @returns BottomTextLivePhoto
 */

interface Props {
  takePhoto?: any;
}

const BottomTextLivePhoto = ({ takePhoto }: Props) => {
  const { t } = useTranslation('live_photo');
  const [instruction, setInstruction] = useState<any>(`${t('stay_still_for_a_live_photo')}`);
  const [icon, setIcon] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setInstruction(`${t('capturing_please_wait')}`);
      setIcon(false);
      takePhoto();
    }, 3000);

    setTimeout(() => {
      setInstruction(`${t('photo_captured_successfully')}`);
      setIcon(true);
    }, 5000);
  }, []);

  return (
    <DivCameraTextStyled>
      <CameraTextStyled>{instruction}</CameraTextStyled>
      {icon && (
        <IconContainer>
          <DoneIcon />
        </IconContainer>
      )}
    </DivCameraTextStyled>
  );
};

export default BottomTextLivePhoto;

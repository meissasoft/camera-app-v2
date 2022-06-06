import router from 'next/router';

import { useEffect, useRef } from 'react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { useUserMedia } from '@/hooks/useUserMedia';

import { DoneIcon } from '@/assets/svg/done-icon';
import { DivCameraBox, DivFrontCam, DivMain, DivFrontCamContainer, DivTextStyled, TextStyled } from './index.styles';

/**
 *
 * @returns Signature captured successfully page
 */

const SignatureCaptured = () => {
  const front = {
    audio: true,
    video: { facingMode: 'environment' }, // change to user for front camera
  };
  const { t } = useTranslation('signature_captured');
  const videoRefFront: any = useRef(null);
  const videoRefBack: any = useRef(null);
  const mediaStream = useUserMedia(front, false);
  const mediaRecorderFront: any = useRef(null);
  const mediaRecorderBack: any = useRef(null);
  const blobsRecordedFront: any = [];
  const blobsRecordedBack: any = [];

  const turnOffCamera = () => {
    if (mediaStream) {
      mediaStream?.getTracks().forEach((track) => {
        track.stop();
      });
    }
  };

  useEffect(() => {
    if (mediaStream && videoRefFront.current && !videoRefFront.current.srcObject) {
      videoRefFront.current.setAttribute('autoplay', '');
      videoRefFront.current.setAttribute('muted', '');
      videoRefFront.current.setAttribute('playsinline', '');
      videoRefFront.current.srcObject = mediaStream;
      videoRefFront.current.play();
      try {
        mediaRecorderFront.current = new MediaRecorder(mediaStream, {
          mimeType: 'video/webm',
        });
        mediaRecorderFront.current.start(1000);
        mediaRecorderFront.current.addEventListener('dataavailable', function (e: any) {
          blobsRecordedFront.push(e.data);
        });
      } catch (exe) {
        mediaRecorderFront.current = new MediaRecorder(mediaStream, {
          mimeType: 'video/mp4',
        });
        mediaRecorderFront.current.start(1000);
        mediaRecorderFront.current.addEventListener('dataavailable', function (e: any) {
          blobsRecordedFront.push(e.data);
        });
      }
    }
    if (mediaStream && videoRefBack.current && !videoRefBack.current.srcObject) {
      videoRefBack.current.setAttribute('autoplay', '');
      videoRefBack.current.setAttribute('muted', '');
      videoRefBack.current.setAttribute('playsinline', '');
      videoRefBack.current.srcObject = mediaStream;
      videoRefBack.current.play();
      try {
        mediaRecorderBack.current = new MediaRecorder(mediaStream, {
          mimeType: 'video/webm',
        });
        mediaRecorderBack.current.start(1000);
        mediaRecorderBack.current.addEventListener('dataavailable', function (e: any) {
          blobsRecordedFront.push(e.data);
        });
      } catch (exe) {
        mediaRecorderBack.current = new MediaRecorder(mediaStream, {
          mimeType: 'video/mp4',
        });
        mediaRecorderBack.current.start(1000);
        mediaRecorderBack.current.addEventListener('dataavailable', function (e: any) {
          blobsRecordedBack.push(e.data);
        });
      }
    }
  }, [mediaStream]);

  useEffect(() => {
    turnOffCamera();
    setTimeout(() => {
      router.push('/status_updated_successfully');
    }, 15000);
  }, []);

  return (
    <DivMain>
      <DivFrontCamContainer>
        <DivFrontCam ref={videoRefFront} muted playsInline />
      </DivFrontCamContainer>
      <DivCameraBox ref={videoRefBack} muted playsInline />
      <DivTextStyled>
        <TextStyled>
          <span>{t('signature_captured_successfully')}</span>
          <DoneIcon />
        </TextStyled>
      </DivTextStyled>
    </DivMain>
  );
};
export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['signature_captured'])),
  },
});

export default SignatureCaptured;

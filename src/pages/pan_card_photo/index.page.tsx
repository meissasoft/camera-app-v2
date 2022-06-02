import router from 'next/router';

import { useEffect, useRef } from 'react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { useUserMedia } from '@/hooks/useUserMedia';

import PanCardPhotos from '@/components/core/PanCardPhoto';
import {
  DivCameraBox,
  DivFrontCam,
  DivMain,
  DivDocScanContainer,
  DivDocScan,
  PanCameraTextStyledWrapper,
  Canvas,
  DivContainer,
  DivEmptyBlur,
} from './index.styles';

/**
 *
 * @returns Pan Card  page
 */

const PanCard = () => {
  const front = {
    audio: true,
    video: { facingMode: 'environment' }, // change to user for front camera
  };
  const { t } = useTranslation('pan_card_photo');
  const photoRefFront: any = useRef(null);
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

  const takePhoto = () => {
    const width = 314;
    const height = width / (16 / 9);
    const video = videoRefBack.current;
    const photo = photoRefFront.current as any;
    photo.width = width;
    photo.height = height;
    const ctx = photo.getContext('2d');
    ctx.drawImage(video, 0, 0, width, height);
    const dataUrl = photo.toDataURL();
    console.log('dataUrl', dataUrl);
  };

  useEffect(() => {
    setTimeout(() => {
      turnOffCamera();
      router.push('/signature_captured');
    }, 15000);
  }, []);

  return (
    <DivMain>
      <DivCameraBox ref={videoRefBack} muted playsInline />
      <Canvas ref={photoRefFront}></Canvas>
      <DivContainer>
        <DivEmptyBlur height="calc(50vh - 150px)" />
        <DivDocScanContainer>
          <DivEmptyBlur height="220px">&emsp; &nbsp; </DivEmptyBlur>
          <DivDocScan />
          <DivEmptyBlur height="220px">&emsp; &nbsp; </DivEmptyBlur>
        </DivDocScanContainer>
        <DivEmptyBlur height="calc(50vh - 50px)" />
        <PanCameraTextStyledWrapper>
          <PanCardPhotos
            takePhoto={takePhoto}
            text1={t('position_the_pan_card_exactly_in_the_frame')}
            text2={t('pan_card_captured_successfully')}
            text3={t('hold_your_signature')}
          />
        </PanCameraTextStyledWrapper>
      </DivContainer>
      <DivFrontCam ref={videoRefFront} muted playsInline />
    </DivMain>
  );
};
export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['pan_card_photo'])),
  },
});

export default PanCard;

import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useUserMedia } from '@/hooks/useUserMedia';
import BottomTextLivePhoto from '@/components/LivePhotoBottom';
import {
  Canvas,
  DivCameraBox,
  DivMain,
  DivAgentBox,
  CameraAgentStyled,
  CameraTextStyledWrapper,
  DivCameraBoxWrapper,
} from './index.style';
/**
 *
 * @returns LiveCameraPhoto page
 */
const LiveCameraPhoto = () => {
  const router = useRouter();
  const CAPTURE_OPTIONS = {
    audio: false,
    video: { facingMode: 'environment' },
  };
  const mediaStream = useUserMedia(CAPTURE_OPTIONS, false);
  const videoRef = useRef(null) as any;
  const videoRef1 = useRef(null) as any;
  const photoRef = useRef(null) as any;

  const turnOffCamera = () => {
    if (mediaStream) {
      mediaStream?.getTracks().forEach((track) => {
        track.stop();
      });
    }
  };

  const takePhoto = () => {
    const width = 314;
    const height = width / (16 / 9);
    const video = videoRef.current;
    const photo = photoRef.current as any;
    photo.width = width;
    photo.height = height;
    const ctx = photo.getContext('2d');
    ctx.drawImage(video, 0, 0, width, height);
    const dataUrl = photo.toDataURL();
    console.log('dataUrl', dataUrl);
  };

  useEffect(() => {
    if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
      videoRef.current.setAttribute('autoplay', '');
      videoRef.current.setAttribute('muted', '');
      videoRef.current.setAttribute('playsinline', '');
      videoRef.current.srcObject = mediaStream;
      videoRef.current.play();
    }
    if (mediaStream && videoRef1.current && !videoRef1.current.srcObject) {
      videoRef1.current.setAttribute('autoplay', '');
      videoRef1.current.setAttribute('muted', '');
      videoRef1.current.setAttribute('playsinline', '');
      videoRef1.current.srcObject = mediaStream;
      videoRef1.current.play();
    }
  }, [mediaStream]);

  useEffect(() => {
    turnOffCamera();
    setTimeout(() => {
      router.push('/pan_card_photo');
    }, 10000);
  }, []);

  return (
    <DivMain>
      <DivAgentBox>
        <Canvas ref={photoRef}></Canvas>
        <CameraAgentStyled ref={videoRef1} />
      </DivAgentBox>
      <DivCameraBoxWrapper>
        <DivCameraBox ref={videoRef}></DivCameraBox>
      </DivCameraBoxWrapper>
      <CameraTextStyledWrapper>
        <BottomTextLivePhoto takePhoto={takePhoto} />
      </CameraTextStyledWrapper>
    </DivMain>
  );
};
export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['live_photo'])),
  },
});
export default LiveCameraPhoto;

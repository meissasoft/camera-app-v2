import styled from '@emotion/styled';

import { COLORS } from '@/constants/colors';

export const DivMain = styled.div`
  background: ${COLORS.BLACK_200};
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const DivCameraBox = styled.video`
  width: 100%;
  object-fit: cover;
  height: 100vh;
`;

export const DivFrontCamContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  position: absolute;
  right: 20px;
  margin-top: 20px;
  height: 140px;
`;

export const DivFrontCam = styled.video`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center
  flex-direction: column;
  width: 120px;
  object-fit: cover;
  border: 1.5px solid ${COLORS.WHITE};
  border-radius: 12px;
`;

export const DivTextStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  padding-bottom: 22px;
`;

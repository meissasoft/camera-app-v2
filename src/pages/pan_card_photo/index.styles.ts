import styled from '@emotion/styled';

import { COLORS } from '@/constants/colors';

export const DivMain = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
`;

export const DivContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
`;

export const DivTextStyled = styled.div`
  display: flex;
  justify-content: center;
`;

export const DivCameraBox = styled.video`
  width: 100%;
  object-fit: cover;
  height: 100vh;
`;

export const DivFrontCam = styled.video`
  box-sizing: border-box;
  display: flex;
  position: absolute;
  right: 20px;
  top: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 120px;
  height: 140px;
  object-fit: cover;
  border: 1.5px solid ${COLORS.WHITE};
  border-radius: 12px;
`;

export const DivEmptyBlur = styled.div<{ height: string }>`
  height: ${({ height }) => height};
  backdrop-filter: blur(15px);
  background-color: rgba(0, 0, 0, 0.1);
`;

export const DivDocScanContainer = styled.div`
  display: flex;
  height: 220px;
`;

export const DivDocScan = styled.div`
  border: 1px solid ${COLORS.SHAMROCK_100};
  flex-grow: 5;
  margin: 1px !important;
`;

export const PanCameraTextStyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  bottom: 0px;
  width: 100%;
  padding-bottom: 22px;
`;

export const Canvas = styled.canvas`
  display: none;
`;

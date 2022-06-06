import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors';
export const DivMain = styled.div`
  background-color: black;
  height: 100vh;
  padding: 20px 0px 0px 0px;
`;
export const DivAgentBox = styled.div`
  position: fixed;
  padding: 40px;
  top: 0%;
  width: 100%;
  z-index: 2;
`;
export const CameraAgentStyled = styled.video`
  box-sizing: border-box;
  width: 30%;
  height: 17%;
  border: 1.5px solid #ffffff;
  border-radius: 12px;
  object-fit: cover;
  left: 75%;
  position: fixed;
  transform: translate(-50%);
  object-fit: cover;
`;

export const DivCameraBoxWrapper = styled.div`
  position: fixed;
  padding: 2em;
  left: 0%;
  width: calc(100vw - 5%);
  height: calc(100vh - 10%);
  transform: translateX(2%);
  z-index: 1;
`;

export const Canvas = styled.canvas`
  display: none;
`;
export const DivCameraBox = styled.video`
  background: ${COLORS.BLACK_200};
  border-color: ${COLORS.WHITE};
  box-sizing: border-box;
  width: 90%;
  height: 44%;
  border-radius: 50%;
  border-style: dashed;
  background: ${COLORS.BLACK_200};
  border-style: dashed;
  position: fixed;
  left: 50%;
  top: 18%;
  transform: translate(-50%);
  z-index: 1;
  object-fit: inherit;
`;
export const CameraTextStyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 30px;
  width: 100%;
`;

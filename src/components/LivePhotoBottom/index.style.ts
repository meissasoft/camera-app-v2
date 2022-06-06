import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors';

export const DivCameraTextStyled = styled.div`
  position: -webkit-sticky;
  position: sticky;
  bottom: 0px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color: ${COLORS.BLACK_100};
  width: 100%;
`;

export const CameraTextStyled = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: ${COLORS.WHITE};
  padding: 10px 0px;
  width: 80%;
  text-align: center;
`;
export const IconContainer = styled.span`
  margin-top: 9px;
`;

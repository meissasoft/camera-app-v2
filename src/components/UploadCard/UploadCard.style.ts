import styled from '@emotion/styled';

import { COLORS } from '@/constants/colors';

export const DivUploadLayout = styled.div`
  box-sizing: border-box;
  padding: 10px;
  margin: 20px 0px;
  width: 100%;
  display: flex;
  border: 1px solid ${COLORS.BLACK_100};
  flex-direction: row;
  border-radius: 5px;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to left, ${COLORS.SKY_100}, ${COLORS.FAUX_CHINESE_BLUE}) border-box;
`;

export const DivHeading = styled.div`
  padding: 5px 0px 5px 0;

  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
`;
export const DivContent = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* or 143% */
  color: #121212;
  opacity: 0.6;
`;
export const DivLabel = styled.div`
  margin-top: -30px;
  width: 44px;
  height: 20px;
  left: 40px;
  top: 358px;

  background: #e2ecf3;
  border-radius: 5px;
`;
export const DivStep = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 18px;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  background: linear-gradient(89.59deg, #38568f 0.3%, #3872b5 36.94%, #38a1f7 99.6%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const DivIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

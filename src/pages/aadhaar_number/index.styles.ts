import styled from '@emotion/styled';

import { COLORS } from '@/constants/colors';

export const DivMain = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

export const DivInner = styled.div`
  padding: 20px 20px 0px 20px;
  height: calc(100vh - 50px);
  box-shadow: 0px -11px 13px rgba(0, 0, 0, 0.06);
  border-radius: 20px 20px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  -webkit-animation: fadeInUp 500ms ease-in-out; /* Chrome, Safari, Opera */
  animation: fadeInUp 500ms ease-in-out;
`;

export const DivBarIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivCrossIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -5px;
`;

export const StyledTitle = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  margin: 0px !important;
`;

export const StyledDescription = styled.p`
  font-size: 16px;
  text-align: center;
  color: ${COLORS.GREY_12};
  opacity: 0.6;
  margin-top: 5px;
`;

export const StyledSpan = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: ${COLORS.GREY_12};
  opacity: 0.6;
`;

export const CapchaContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
`;

export const CapchaTextDiv = styled.div`
  border: 1px solid ${COLORS.LIGHT_GREY};
  border-radius: 5px;
  padding: 10px;
  letter-spacing: 2px;
  box-sizing: border-box;
  margin-right: 15px;
`;

export const CapchaTextSpan = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: ${COLORS.BLACK_HEAVY};
`;

export const BottomButtonDiv = styled.div`
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  padding-bottom: 22px;
`;

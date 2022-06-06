import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors';

export const DivMain = styled.div`
  margin: 20px 20px 0px 20px;
  height: calc(100vh - 20px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  -webkit-animation: fadeInUp 500ms ease-in-out; /* Chrome, Safari, Opera */
  animation: fadeInUp 500ms ease-in-out;

  .otpInput {
    margin: 0px;
    font-size: 30px;
    font-weight: 700;
    width: 40px;
    border: none;
    outline: none;
    background: linear-gradient(90.81deg, ${COLORS.FAUX_CHINESE_BLUE} 10%, ${COLORS.SKY_100} 75.3%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    border-bottom: 2.5px solid rgba(0, 0, 0, 0.1);
    margin-right: 10px;
    text-align: center;
    outline: none;
    caret-color: linear-gradient(90.81deg, ${COLORS.FAUX_CHINESE_BLUE} 10%, ${COLORS.SKY_100} 75.3%);
    padding: 0px 10px;
  }
  .otpInput:focus,
  .otpInput:active {
    background: linear-gradient(90.81deg, ${COLORS.FAUX_CHINESE_BLUE} 10%, ${COLORS.SKY_100} 75.3%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    border-bottom: 2.5px solid ${COLORS.FAUX_CHINESE_BLUE};
  }
`;

export const DivContentBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const DivContent = styled.div`
  margin-top: 5px;
  text-align: center;
`;

export const DivContentTitle = styled.div`
  margin-top: 20px;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  color: ${COLORS.BLACK_100};
`;

export const DivContentDescription = styled.div`
  margin-top: 10px;
  font-size: 18px;
  text-align: center;
  color: ${COLORS.GREY_12};
  opacity: 0.6;
`;

export const OtpContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  padding-bottom: 22px;
  margin-top: 20px;
`;

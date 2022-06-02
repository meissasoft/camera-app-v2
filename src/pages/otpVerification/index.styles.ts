import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors';

export const DivMain = styled.div`
  margin-top: 50px;
`;

export const DivMainContainer = styled.div`
  padding: 20px 20px 0px 20px;
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  background: ${COLORS.WHITE};
  box-shadow: 0px -11px 13px rgba(0, 0, 0, 0.06);
  border-radius: 20px 20px 0px 0px;
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

  .btn {
    padding: 0px 8px;
  }
  .btn-primary {
    outline: none;
    background-color: ${COLORS.PARROT_100};
    border-color: ${COLORS.PARROT_100};
    font-weight: 600;
    font-size: 12px;
  }
  .btn-primary:focus {
    outline: none;
  }
`;

export const CodeText = styled.span`
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: ${COLORS.GREY_12};
  opacity: 0.6;
`;

export const BarIconDiv = styled.div`
  cursor: pointer;
  text-align: center;
`;
export const CrossIconDiv = styled.div`
  display: flex;
  margin-top: -15px;
  justify-content: flex-end;
  cursor: pointer;
`;
export const VerificationCodeDiv = styled.div`
  margin-top: 5px;
  text-align: center;
`;
export const VerificationCodeTitle = styled.p`
  margin-top: 20px;
  font-weight: 600;
  font-size: 20px;
  text-align: center,
  color: ${COLORS.BLACK_100},
`;
export const VerificationCodeDescription = styled.p`
  margin-top: 10px;
  font-size: 18px;
  text-align: center;
  color: ${COLORS.GREY_12};
  opacity: 0.6;
`;
export const OtpContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ResendText = styled.span`
  background: linear-gradient(90deg, ${COLORS.FAUX_CHINESE_BLUE} 0%, ${COLORS.SKY_100} 85%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  padding-bottom: 22px;
  margin-top: 100px;
`;

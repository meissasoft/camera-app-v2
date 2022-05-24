import styled from '@emotion/styled';

import { COLORS } from '@/constants/colors';

export const DivMain = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  .button-container {
    width: 100%;
    margin-top: 48px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
`;

export const StyledLanguage = styled.span<{ isActive: boolean }>`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;

  ${({ isActive }) =>
    isActive
      ? `background: linear-gradient(90deg, ${COLORS.FAUX_CHINESE_BLUE} 0%, ${COLORS.SKY_100} 35%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;`
      : ''};
`;

export const StyledLine = styled.hr`
  opacity: 0.6;
  margin: 15px 5px 15px 0px;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const StyledColor = styled.div`
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
export const DivSvg = styled.div`
  text-align: center;
`;
export const DivForm = styled.div`
  margin-top: 50px;
  text-align: left;
`;

export const FooterButtonStyle = styled.div`
  margin-top: 2%;
`;

export const FormLabel = styled.h5`
  text-align: left;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`;
export const RadioButtonView = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
  .radioInput {
    margin-right: 15px;
    background-color: #e5e5e5;
    width: 20px;
    height: 20px;
    opacity: 0;
    display: none;
  }
`;
export const CustomRadioButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px
  height: 30px;
  border: 2px solid #38a1f7;
  border-radius: 50%;
  .innerBall {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: blue;
    border-radius: 50%;
    border: 5px solid #38a1f7;
  }
`;

export const RadioButtonLabel = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #121212;
  opacity: 1;
`;

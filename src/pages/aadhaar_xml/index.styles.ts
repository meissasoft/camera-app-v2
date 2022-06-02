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
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
`;

export const DivSvg = styled.div`
  text-align: center;
`;

export const DivForm = styled.div`
  margin-top: 50px;
  text-align: left;
`;

export const FooterButtonStyle = styled.div`
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  padding-bottom: 22px;
`;

export const StyledParagraph = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1px;
  color: ${COLORS.GREY_12};
  margin-left: -8px;
  opacity: 0.8;
`;
export const FormLabel = styled.h5`
  text-align: left;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: ${COLORS.BLACK_HEAVY};
`;

export const MainStyle = styled.div`
  .customRadio input[type='radio'] {
    position: absolute;
    left: -9999px;
    font-size: 18px;
  }
  .customRadio input[type='radio'] + label {
    position: relative;
    padding: 19px 0 0 50px;
    cursor: pointer;
    color: ${COLORS.FAUX_CHINESE_BLUE};
    font-weight: 600;
  }
  .customRadio input[type='radio'] + label:before {
    content: '';
    background: ${COLORS.WHITE_200};
    border: 2px solid ${COLORS.FAUX_CHINESE_BLUE};
    margin-top: 10px;
    background-color: ${COLORS.WHITE_200};
    cursor: pointer;
    height: 20px;
    width: 20px;
    margin-left: 10px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .customRadio input[type='radio'] + label:after {
    content: '';
    background: linear-gradient(180deg, ${COLORS.FAUX_CHINESE_BLUE} 0%, ${COLORS.SKY_100} 100%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    position: absolute;
    top: 5px;
    left: 5px;
    margin-left: 9px;
    margin-top: 9px;
    opacity: 0;
    transform: scale(2);
    transition: transform 0.3s linear, opacity 0.3s linear;
  }
  .customRadio input[type='radio']:checked + label:after {
    opacity: 1;
    transform: scale(1);
  }
`;

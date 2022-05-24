import styled from '@emotion/styled';

import { COLORS } from '@/constants/colors';

export const DivMain = styled.div`
  padding: 20px;
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
export const DivMarginTop = styled.div`
  margin-top: -5px;
`;
export const FooterButtonStyle = styled.div`
  margin-top: 2%;
`;

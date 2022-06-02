import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors';

export const DivMain = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;
export const DivSvg = styled.div`
  text-align: center;
  animation: spin 2s linear infinite;
`;
export const DivForm = styled.div`
  margin-top: 20px;
  text-align: center;
`;
export const TextStyled = styled.p`
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: ${COLORS.BLACK_HEAVY};
`;
export const ParagraphStyled = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: ${COLORS.GREY_12};
  opacity: 0.6;
`;

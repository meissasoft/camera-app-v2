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

export const IdentificationStyled = styled.p`
  text-align: center;
`;

export const IdentificationTextStyled = styled.p`
  margin-top: 20px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  margin-bottom: 0px !important;
`;

export const IdentificationSmallTextStyled = styled.p`
  margin-top: 4px !important ;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  color: ${COLORS.GREY_12};
  opacity: 0.6;
`;

export const StyledLine = styled.hr`
  opacity: 0.6;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const IdentifyText = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 20px;
`;

export const DocumentContainer = styled.div`
  margin-left: 10px;
  margin-top: 20px;
`;

export const DivVerificationCardStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivMainModelStyled = styled.div`
  width: 100px;
`;

export const DivMainModelLineStyled = styled.div`
  position: absolute;
  width: 287px;
  height: 0px;
  left: 44px;
  top: 200px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const DivButton = styled.div`
  margin-top: 20px;
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  padding-bottom: 22px;
`;

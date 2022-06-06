import styled from '@emotion/styled';

import { COLORS } from '@/constants/colors';

export const TextStyled = styled.p`
  color: ${COLORS.WHITE_100};
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  padding: 10px;
  position: -webkit-sticky;
  position: sticky;
  bottom: 0px;
  background-color: ${COLORS.BLACK_100};
  width: 100%;
`;

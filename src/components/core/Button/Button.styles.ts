import styled from '@emotion/styled';

import { COLORS } from '@/constants/colors';

export const ButtonStyled = styled.button<{
  backgroundColor?: string;
  hoverColor?: string;
  isBottom?: boolean;
  bgLight?: boolean;
}>`
  position: ${({ isBottom }) =>
    isBottom
      ? `inherit;
    `
      : 'absolute'};
  bottom: 10%;
  margin-left: 18px;
  margin-right: 18px;
  min-width: 100px;
  width: 100%;
  height: 50px;
  background-color: ${({ backgroundColor }) => `${backgroundColor || COLORS.LABEL_COLOR}`};
  color: ${({ bgLight }) =>
    bgLight ? `linear-gradient(to right, #38568f 0%, #38a1f7 100%, #38568f 100%)` : `${COLORS.WHITE_100}`};
  border-radius: 5px;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: -0.4896000027656555px;
  border: 0px;
  padding-left: 25px;
  padding-right: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  background-image: ${({ bgLight }) =>
    bgLight
      ? `linear-gradient(to right, #E3E9Ef 0%, #E3EAF1 100%, #E3EdF4 100%);`
      : `linear-gradient(to right, #38568f 0%, #38a1f7 100%, #38568f 100%);`};

  transition: 0.5s;
  background-size: 200% auto;
  box-shadow: 0 0 20px #eee;
  display: block;

  &:disabled {
    background-color: ${COLORS.GREY_90};
    cursor: not-allowed;
  }
  &:hover {
    background-image: ${({ bgLight }) =>
      bgLight
        ? `linear-gradient(to right, #E3E9Ef 0%, #E3EAF1 100%, #E3EdF4 100%);`
        : `linear-gradient(to right, #38568f 0%, #38a1f7 100%, #38568f 100%);`};
  }
`;
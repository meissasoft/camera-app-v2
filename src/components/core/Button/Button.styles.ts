import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors';
export const ButtonStyled = styled.button<{
  backgroundColor?: string;
  hoverColor?: string;
  isTransparent?: boolean;
  disabled?: boolean;
}>`
  ${({ isTransparent, disabled }) =>
    isTransparent
      ? `
      background-color: ${COLORS.BLUE_600};
      border-color: ${COLORS.BLUE_600};
      border: none;
`
      : disabled
      ? `
      background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(269.82deg, #38A1F7 0.4%, #38568F 99.6%) !important;
      cursor: not-allowed;
      opacity: 0.5;
`
      : `
      border: 0px;
      background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(269.82deg, #38A1F7 0.1%, #38568F 99.85%) !important;
`};
  margin-left: 18px;
  margin-right: 18px;
  min-width: 100px;
  width: 100%;
  height: 50px;
  color: ${COLORS.WHITE_100};
  border-radius: 5px;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: -0.4896000027656555px;
  padding-left: 25px;
  padding-right: 25px;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  border-radius: 5px;
  transition: 0.5s;
  background-size: 200% auto;
  box-shadow: 0 0 20px #eee;
  display: block;
  &:hover {
    ${({ isTransparent, disabled }) =>
      isTransparent || disabled
        ? `background-image:none;`
        : `background-image: linear-gradient(to right, #38568F 0%, #38A1F7 90%, #38568F 90%); `}
`;

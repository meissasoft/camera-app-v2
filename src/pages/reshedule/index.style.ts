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

export const DescriptionDiv = styled.div`
  margin-top: 5px;
  display: inline;
  flex-direction: row;
`;

export const LightText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  margin-bottom: 0px !important;
  color: ${COLORS.GREY_12};
  opacity: 0.6;
`;

export const BoldText = styled.span`
  font-weight: 600;
  margin-top: 5px;
  font-style: normal;
  font-size: 18px;
  text-align: center;
  margin-bottom: 0px !important;
  color: ${COLORS.BLACK_HEAVY} !important;
  opacity: 10 !important;
`;

export const Divider = styled.hr`
  color: rgba(0, 0, 0, 0.7);
`;

export const CalendarDiv = styled.div`
  border: 1px;
  display: flex;
  justify-content: center;
  margin: 10px 0px;
  .react-calendar {
    padding-bottom: 20px;
    border: none;
    width: 400px;
    max-width: 100%;
    background-color: ${COLORS.WHITE_100};
    color: ${COLORS.MAKO_100};
    border-radius: 8px;
    line-height: 1.125em;
    font-size: 16px;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.4;
    font-size: 16px;
    font-weight: 600;
  }
  .react-calendar__tile {
    font-size: 16px;
    font-weight: 600;
    border-radius: 3px;
    margin: 0px;
    border: 0px;
  }
  .react-calendar__navigation button {
    color: ${COLORS.BLACK_200};
    min-width: 44px;
    background: none;
    margin-top: 8px;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: ${COLORS.BLACK_200};
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: ${COLORS.ATHEN_GREY};
  }
  .react-calendar__navigation button[disabled] {
    background-color: none;
  }

  abbr[title] {
    text-decoration: none;
  }
  .react-calendar__month-view__days__day--weekend {
    color: ${COLORS.BLACK_100};
  }

  .react-calendar__month-view__days__day--weekend[disabled] {
    color: rgba(16, 16, 16, 0.3) !important;
    /* flex: 0 0 10.2857% !important; */
    /* flex: 0 0 10.2857% !important; */
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: ${COLORS.ATHEN_GREY};
    color: linear-gradient(90.81deg, ${COLORS.FAUX_CHINESE_BLUE} 10%, ${COLORS.SKY_100} 75.3%);
    border-radius: 6px;
  }
  .react-calendar__tile--now {
    background: linear-gradient(to bottom, ${COLORS.FAUX_CHINESE_BLUE} 10%, ${COLORS.SKY_100} 75.3%);
    border-radius: 3px;
    font-weight: bold;
    /* flex: 0 0 10.2857% !important; */
    color: ${COLORS.WHITE_100};
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: ${COLORS.FAUX_CHINESE_BLUE};
    border-radius: 0px;
    font-weight: bold;
    color: ${COLORS.SKY_100};
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: ${COLORS.FAUX_CHINESE_BLUE};
  }
  .react-calendar__tile--active {
    background: ${COLORS.FAUX_CHINESE_BLUE};
    border-radius: 6px;
    font-weight: bold;
    color: white;
  }

  .react-calendar__tile:disabled[disabled] {
    background-color: white;
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: unset;
    font-weight: bold;
    font-size: 14px;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: linear-gradient(90.81deg, ${COLORS.FAUX_CHINESE_BLUE} 10%, ${COLORS.SKY_100} 75.3%);
    color: white;
    border-radius: 0px;
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: ${COLORS.ALTO_GREY};
  }

  .react-calendar__tile--range {
    background: ${COLORS.WHITE_100};
    color: ${COLORS.BLACK_100};
    border-radius: 0;
  }
  .react-calendar__tile--rangeStart {
    border-radius: 0px;
    background: linear-gradient(90.81deg, ${COLORS.FAUX_CHINESE_BLUE} 10%, ${COLORS.SKY_100} 75.3%);
    color: ${COLORS.WHITE_200};
  }
  .react-calendar__tile--rangeEnd {
    border-radius: 0px;
    background: linear-gradient(to bottom, ${COLORS.FAUX_CHINESE_BLUE} 10%, ${COLORS.SKY_100} 75.3%);
    color: ${COLORS.WHITE_200};
    border-radius: 3px !important;
  }
  .confirmDisable {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      linear-gradient(269.82deg, ${COLORS.SKY_100} 100%, ${COLORS.FAUX_CHINESE_BLUE} 100%);
    opacity: 0.6;
  }
  .confirmDisable:active,
  .confirmDisable:focus {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      linear-gradient(269.82deg, ${COLORS.SKY_100} 100%, ${COLORS.FAUX_CHINESE_BLUE} 100%);
    opacity: 0.6;
  }
`;

export const DefaultOptionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1.2px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  background: ${COLORS.WHITE_200};
  span {
    color: ${COLORS.GREY_12};
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    opacity: 0.6;
  }
`;

export const OptionsListDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1.2px solid ${COLORS.BLACK_HEAVY};
  border-radius: 5px;
  padding: 0px 10px;
  background: ${COLORS.WHITE_200};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.09);
  border-radius: 5px;
  position: absolute;
  width: 100%;
  z-index: 999;
`;

export const SingleOptionDiv = styled.div`
  border-bottom: 1.2px solid rgba(0, 0, 0, 0.2);
  padding: 14px 10px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-weight: 600;
  opacity: 0.8;
  .planeSpan {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    opacity: 0.8;
  }
  .blueSpan {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    background: linear-gradient(180deg, ${COLORS.FAUX_CHINESE_BLUE} 0%, ${COLORS.SKY_100} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  :last-child {
    border-bottom: none;
  }
`;

export const CustomDropDown = styled.div`
  position: relative;
`;

export const DivFooterButton = styled.div`
  margin-top: 20px;
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  padding-bottom: 22px;
`;

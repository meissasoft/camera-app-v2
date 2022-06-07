import { useState } from 'react';
import router from 'next/router';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Calendar from 'react-calendar';
import Button from '@/components/core/Button';
import Heading from '@/components/core/Header/Header';

import CalendarPrevLabel from '@/assets/svg/calendar_prev_label';
import CalendarNextLabel from '@/assets/svg/calendar_next_label';
import TickMark from '@/assets/svg/tick_mark';

import { ArrowBotom } from '@/assets/svg/arrow_bottom';
import { ArrowTop } from '@/assets/svg/arrow_top';

import 'react-calendar/dist/Calendar.css';
import {
  DivMain,
  CustomDropDown,
  DescriptionDiv,
  CalendarDiv,
  Divider,
  DefaultOptionDiv,
  OptionsListDiv,
  SingleOptionDiv,
  LightText,
  BoldText,
} from './index.style';
import { DivFooterButton } from '../keeps_things_handy/index.style';

const Reshedule = () => {
  const { t } = useTranslation('reschedule');
  const [value, onChange] = useState(new Date());
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(`${t('select_a_available_time_slot')}`);
  const [selectOptionIcon, setSelectOptionIcon] = useState<any>(null);
  const AvaliableSlots = [
    {
      id: 1,
      startTime: '10:00am',
      endTime: '10:00am',
    },
    {
      id: 2,
      startTime: '10:15am',
      endTime: '10:15am',
    },
    {
      id: 3,
      startTime: '10:30am',
      endTime: '10:40am',
    },
    {
      id: 4,
      startTime: '10:45am',
      endTime: '10:55am',
    },
  ];

  const handleBack = () => {
    router.push('/token_number');
  };

  const handleContinue = () => {
    router.push('/initiating_video');
  };

  return (
    <DivMain>
      <div>
        <Heading text={t('reschedule')} onClick={handleBack} />
        <div className="mt-5 text-center">
          <DescriptionDiv>
            <LightText>{t('please_select_a')}</LightText> <BoldText>{t('date_and_time')}</BoldText>
            <LightText>{t('to_reschedule_a_video_call_session_with_our_agent')}</LightText>
          </DescriptionDiv>
        </div>

        <CalendarDiv>
          <Calendar
            onChange={onChange}
            value={value}
            prevLabel={<CalendarPrevLabel />}
            nextLabel={<CalendarNextLabel />}
            minDate={new Date()}
            className="react-calendar"
          />
        </CalendarDiv>

        <Divider />
        <CustomDropDown>
          <DefaultOptionDiv onClick={() => (dropDownOpen ? setDropDownOpen(false) : setDropDownOpen(true))}>
            <span>{selectedOption}</span>
            <span>{!dropDownOpen ? <ArrowBotom /> : <ArrowTop />}</span>
          </DefaultOptionDiv>
          <>
            {dropDownOpen && (
              <OptionsListDiv>
                {AvaliableSlots.map((item, index) => {
                  return (
                    <SingleOptionDiv
                      key={index}
                      onClick={() => {
                        if (selectOptionIcon === item.id) {
                          setSelectedOption(`${t('select_a_available_time_slot')}`);
                          setSelectOptionIcon(null);
                        } else {
                          setSelectedOption(`${item.startTime} to ${item.endTime}`);
                          setDropDownOpen(false);
                          setSelectOptionIcon(item.id);
                        }
                      }}
                    >
                      <span className={selectOptionIcon === item.id ? 'blueSpan' : 'planeSpan'}>
                        {item.startTime} to {item.endTime}
                      </span>
                      {selectOptionIcon === item.id ? <TickMark /> : <></>}
                    </SingleOptionDiv>
                  );
                })}
              </OptionsListDiv>
            )}
          </>
        </CustomDropDown>
      </div>
      <DivFooterButton>
        <Button onClick={handleContinue} className={` m-auto ${selectOptionIcon === null ? 'confirmDisable' : ''}`}>
          {t('confirm')}
        </Button>
      </DivFooterButton>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['reschedule'])),
  },
});

export default Reshedule;

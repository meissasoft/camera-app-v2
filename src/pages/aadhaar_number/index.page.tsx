import router from 'next/router';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Field, Form, Formik } from 'formik';

import { useTranslation } from 'next-i18next';
import { BarIcon } from '@/assets/svg/barIcon';
import { CrossIcon } from '@/assets/svg/crossIcon';
import Button from '@/components/core/Button';

import FieldInput from '@/components/core/FieldInput';
import { VectorIcon } from '@/assets/svg/reload';
import { aadhaarNumber } from '@/validations/aadhaarNumber';
import {
  DivMain,
  CapchaContainer,
  DivInner,
  DivBarIcon,
  DivCrossIcon,
  StyledTitle,
  StyledDescription,
  StyledSpan,
  CapchaTextDiv,
  CapchaTextSpan,
  BottomButtonDiv,
} from './index.styles';

interface Values {
  aadhaarNumber: string;
  securityCode: string;
}

const AadhaarNumber = () => {
  const initialValue: Values = {
    aadhaarNumber: '',
    securityCode: '',
  };
  const { t } = useTranslation('aadhaar_number');

  const handleBack = () => {
    router.push('/aadhaar_offline_kyc');
  };

  const onFormSubmit = () => {
    router.push('/otpVerification');
  };

  return (
    <DivMain>
      <Formik initialValues={initialValue} onSubmit={onFormSubmit} validationSchema={aadhaarNumber}>
        {({ values, errors }) => {
          console.log('Err', errors);
          return (
            <Form>
              <DivInner>
                <div>
                  <DivBarIcon>
                    <BarIcon />
                  </DivBarIcon>
                  <DivCrossIcon onClick={handleBack}>
                    <CrossIcon />
                  </DivCrossIcon>
                  <StyledTitle>{t('aadhaar_number')}</StyledTitle>
                  <StyledDescription>{t('enter_your_12_digit_aadhaar_number_to_begin')}</StyledDescription>
                  <Field
                    as={FieldInput}
                    id="aadhaarNumber"
                    placeholder={t('aadhaar_number')}
                    name="aadhaarNumber"
                    autoComplete="off"
                    autoFocus
                    className="my-2 m-auto"
                    value={values.aadhaarNumber}
                    error={errors.aadhaarNumber}
                  />
                  <Field
                    as={FieldInput}
                    id="securityCode"
                    placeholder={t('enter_security_code')}
                    name="securityCode"
                    autoComplete="off"
                    className="my-2 m-auto"
                    value={values.securityCode}
                    error={errors.securityCode}
                  />
                  <StyledSpan>{t('type_the_character_you_see_in_the_picture')}</StyledSpan>
                  <CapchaContainer>
                    <CapchaTextDiv>
                      <CapchaTextSpan>HnsoeG</CapchaTextSpan>
                    </CapchaTextDiv>
                    <VectorIcon />
                  </CapchaContainer>
                </div>
                <BottomButtonDiv>
                  <Button className="m-auto" type="submit" disabled={Object.keys(errors).length > 0}>
                    {t('send_otp')}
                  </Button>
                </BottomButtonDiv>
              </DivInner>
            </Form>
          );
        }}
      </Formik>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['aadhaar_number'])),
  },
});

export default AadhaarNumber;

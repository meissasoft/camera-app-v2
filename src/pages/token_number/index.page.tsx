import router from 'next/router';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Button from '@/components/core/Button';
import Heading from '@/components/core/Header/Header';
import { useAppDispatch } from '@/hooks/useReduxTypedHooks';
import { setVerificationStep } from '@/store/app';

import { DivMain } from './index.style';

const TokenNumber = () => {
  const dispatch = useAppDispatch();

  const { t } = useTranslation('otpVerification');

  const handleBack = () => {
    router.push('/login');
  };

  const handleContinue = () => {
    router.push('/verification');
    dispatch(setVerificationStep(1));
  };

  return (
    <DivMain>
      <div>
        <div className="heading">
          <Heading text={t('Your token number')} onClick={handleBack} />
        </div>

        <div className="mt-5 text-center">
          <p className="tockenNumber">25</p>
          <p className="description">{t('Request you to wait for till your token number is zero.')}</p>
        </div>
        <hr />
        <div className="mt-5 text-center">
          <div className="title">{t('Your estimated wait time')}</div>
          <p className="estimatedTime">00:45:30</p>
          <p className="description">
            {t(
              'As all our agents are busy at this moment, We recommend you to wait patiently and come back after sometime '
            )}
          </p>
        </div>
      </div>

      <Button isBottom onClick={handleContinue} className="my-5 m-auto">
        Book a slot
      </Button>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['otpVerification'])),
  },
});

export default TokenNumber;
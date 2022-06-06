import router from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Button from '@/components/core/Button';
import Heading from '@/components/core/Header/Header';
import OTPInput from '@/components/core/Otp';
import { CheckMarkSvg } from '@/assets/svg/check_mark';
import { useAppSelector } from '@/hooks/useReduxTypedHooks';
import { getAppDataSelector } from '@/store/app';
import {
  ButtonWrapper,
  DivContent,
  DivContentBody,
  DivContentDescription,
  DivContentTitle,
  DivMain,
  OtpContainerWrapper,
} from './index.style';
/**
 *
 * @returns DownloadPage
 */

const DownloadPage = () => {
  const { downloadFailed } = useAppSelector(getAppDataSelector);
  const { t } = useTranslation('download_successfully');
  const handleBack = () => {
    router.push('/otpVerification');
  };
  const handleContinue = () => {
    router.push('/keeps_things_handy');
  };
  return (
    <DivMain>
      <div>
        <Heading text={downloadFailed ? t('download_failed') : t('download_successfully')} onClick={handleBack} />
        <DivContentBody>
          <DivContent>
            <CheckMarkSvg />
            <DivContentTitle>
              {downloadFailed ? t('download_unsuccessful') : t('file_download_successfully')}
            </DivContentTitle>
            <DivContentDescription>
              {downloadFailed
                ? t('file_not_downloaded_please_try_again')
                : t('kindly_reconfirm_your_share_code_to_grant_access_to_your_xml_file.')}
            </DivContentDescription>
          </DivContent>
          <OtpContainerWrapper>
            <OTPInput
              autoFocus
              isNumberInput
              length={4}
              inputClassName="otpInput"
              onChangeOTP={(e) => {
                console.log(e);
              }}
            />
          </OtpContainerWrapper>
        </DivContentBody>
      </div>
      <ButtonWrapper>
        <Button onClick={handleContinue} className="m-auto">
          {downloadFailed ? t('try_again') : t('proceed')}
        </Button>
      </ButtonWrapper>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['download_successfully'])),
  },
});

export default DownloadPage;

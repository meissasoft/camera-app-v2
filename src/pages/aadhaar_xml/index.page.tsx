import { useState } from 'react';
import { useRouter } from 'next/router';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Button from '@/components/core/Button';
import Header from '@/components/core/Header';

import { AadhaarXmlSvg } from '@/assets/svg/aadhaar_xml';
import MyCommenceCenteredModal from '@/components/CommenceVideomodel';
import { DivMain, DivSvg, FooterButtonStyle, DivForm, FormLabel, MainStyle, StyledParagraph } from './index.styles';
/**
 *
 * @returns AadhaarXml page
 */
const AadhaarXml = () => {
  const { t } = useTranslation('aadhaar_xml');
  const router = useRouter();
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [ischecked, setIsChecked] = useState<boolean>(false);

  const onClickHeaderIcon = () => {
    router.push('/commence_video');
  };

  const handleContinue = () => {
    setModalShow(true);
  };

  const onAgree = () => {
    router.push('/aadhaar_offline_kyc');
  };

  const onDisAgree = () => {
    setModalShow(false);
  };

  return (
    <DivMain>
      <div>
        <Header text={t('aadhaar_xml')} onClick={onClickHeaderIcon} />
        <DivSvg>
          <AadhaarXmlSvg />
        </DivSvg>
        <DivForm>
          <FormLabel>{t('do_you_have_an_aadhaar_xml_file?')}</FormLabel>
        </DivForm>
        <MainStyle>
          <form action="#" className="customRadio">
            <div className="row">
              <input
                type="radio"
                name="textEditor"
                id="dreamweaver"
                checked
                onClick={() => (ischecked ? setIsChecked(true) : setIsChecked(false))}
              />
              <label htmlFor="dreamweaver">
                <StyledParagraph>{t('yes')}</StyledParagraph>
              </label>
            </div>
            <div className="row">
              <input type="radio" name="textEditor" id="sublime" />
              <label htmlFor="sublime">
                <StyledParagraph>{t('no')}</StyledParagraph>
              </label>
            </div>
          </form>
          <div></div>
        </MainStyle>
      </div>
      <FooterButtonStyle>
        <Button onClick={handleContinue} className="m-auto">
          {t('continue')}
        </Button>
      </FooterButtonStyle>
      <MyCommenceCenteredModal show={modalShow} onAgree={onAgree} onDisagree={onDisAgree} onHide={onDisAgree} />
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['aadhaar_xml'])),
  },
});

export default AadhaarXml;

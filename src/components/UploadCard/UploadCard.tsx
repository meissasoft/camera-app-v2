import React from 'react';

import { UploadIcon } from '@/assets/svg/upload';

import { DivContent, DivHeading, DivIcon, DivUploadLayout } from './UploadCard.style';

interface Props {
  content: string;
  heading: string;
}

function UploadCard({ content, heading }: Props) {
  return (
    <DivUploadLayout>
      <div className="col-8">
        <DivHeading>{heading}</DivHeading>
        <DivContent>{content}</DivContent>
      </div>
      <DivIcon className="col-4">
        <UploadIcon />
      </DivIcon>
    </DivUploadLayout>
  );
}

export default UploadCard;

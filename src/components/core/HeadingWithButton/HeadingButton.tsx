import router from 'next/router';

import React from 'react';

import { Button } from 'react-bootstrap';

import { ButtonText, DivHeader, StyledText } from './HeadingButton.style';
import { IHeaderProps } from './HeadingButton.types';

function HeadingWithButton({ text, retake }: IHeaderProps) {
  const onIconCLick = () => {
    router.push('/camera_pic');
  };
  return (
    <DivHeader className="container">
      <div>
        <StyledText>{text}</StyledText>
      </div>
      <div>
        <Button onClick={onIconCLick}>
          <ButtonText>{retake}</ButtonText>
        </Button>
      </div>
    </DivHeader>
  );
}

export default HeadingWithButton;

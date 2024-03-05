import React from 'react';
import { ButtonWrapper, Button } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';
import theme from '~/styles/theme';

export default function ScrollToTop({ onClick }: { onClick: () => void }) {
  return (
    <ButtonWrapper>
      <Button onClick={onClick}>
        <FontAwesomeIcon
          icon={faCircleChevronUp}
          size="3x"
          color={theme.PALETTE.gray300}
        />
      </Button>
    </ButtonWrapper>
  );
}

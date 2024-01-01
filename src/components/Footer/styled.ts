import styled from '@emotion/styled';
import { TABLET } from '~/styles/common';
import theme from '~/styles/theme';

export const FooterWrapper = styled.footer`
  display: grid;
  place-items: center;
  padding: 3rem 0;
  font-size: 1rem;
  color: ${theme.PALETTE.gray300};

  ${TABLET} {
    font-size: 0.8rem;
  }
`;

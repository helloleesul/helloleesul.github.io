import styled from '@emotion/styled';
import { TABLET } from '~/styles/common';
import theme from '~/styles/theme';

export const HeaderWrapper = styled.header`
  padding: 2rem 0;
  color: ${theme.PALETTE.gray600};
  h1 {
    font-style: italic;
    font-size: 2rem;
    font-weight: 800;
    &:hover {
      text-decoration: underline;
    }
    ${TABLET} {
      font-size: 2rem;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
`;

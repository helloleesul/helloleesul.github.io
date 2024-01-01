import styled from '@emotion/styled';
import { TABLET } from '~/styles/common';
import theme from '~/styles/theme';

export const HeaderWrapper = styled.header`
  padding: 2rem 0;
  color: ${theme.PALETTE.gray600};
  h1 {
    font-size: 2rem;
    font-weight: 800;
    margin-left: -2.5rem;
    ${TABLET} {
      font-size: 2rem;
    }
  }
`;

export const Circle = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  background: ${theme.PALETTE.yellow};
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
`;

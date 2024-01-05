import { css } from '@emotion/react';
import styled from '@emotion/styled';

const breakpoints = [576, 768, 992, 1200];
const mediaQueries = breakpoints.map(bp => `@media (max-width: ${bp}px)`);

export const [MOBILE, TABLET, LAPTOP, DESKTOP] = mediaQueries;

export const Container = styled.div`
  width: ${breakpoints[1]}px;
  margin: 0 auto;

  ${TABLET} {
    width: 100%;
    padding: 0 1rem;
  }
`;

export const RoundItem = css`
  border: 3px solid;
  padding: 0.5rem 0.7rem;
  border-radius: 100px;
  font-size: 14px;
  font-weight: bold;
`;

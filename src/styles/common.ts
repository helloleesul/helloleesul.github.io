import { css } from '@emotion/react';
import styled from '@emotion/styled';

const breakpoints = [576, 768, 992, 1200];
const mediaQueries = breakpoints.map(bp => `@media (max-width: ${bp}px)`);

export const [MOBILE, TABLET, LAPTOP, DESKTOP] = mediaQueries;

export const Container = styled.div`
  max-width: ${breakpoints[2]}px;
  margin: 0 auto;

  ${TABLET} {
    max-width: 100%;
    padding: 0 1rem;
  }
`;

export const Background = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  background-color: var(--background);
  color: var(--color);
  transition:
    background 0.3s ease-in,
    color 0.3s ease-in;
`;

export const RoundItem = css`
  border: 3px solid;
  padding: 0.5rem 0.7rem;
  border-radius: 100px;
  font-size: 14px;
  font-weight: bold;
  list-style: none;
`;

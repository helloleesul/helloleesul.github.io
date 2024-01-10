import { css } from '@emotion/react';
import styled from '@emotion/styled';

const breakpoints = [576, 768, 992, 1200];
const mediaQueries = breakpoints.map(bp => `@media (max-width: ${bp}px)`);

export const [MOBILE, TABLET, LAPTOP, DESKTOP] = mediaQueries;

export const THEME_TRANSITION = css`
  background-color: var(--background);
  color: var(--color);
  transition:
    background 0.3s ease-in,
    color 0.3s ease-in;
`;

export const SCALE_TRANSITION = css`
  transition: transform 0.1s ease-in;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Container = styled.div`
  max-width: ${breakpoints[2]}px;
  margin: 0 auto;
  padding: 0 1rem;

  ${TABLET} {
    max-width: 100%;
  }
`;

export const Background = styled.div`
  position: sticky;
  top: 0;
  height: 100%;
  ${THEME_TRANSITION}
`;

export const RoundItem = css`
  border: 3px solid;
  padding: 0.5rem 0.7rem;
  border-radius: 100px;
  font-size: 14px;
  font-weight: bold;
  list-style: none;
  display: inline-block;
`;

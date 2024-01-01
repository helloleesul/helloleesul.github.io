import styled from '@emotion/styled';

const breakpoints = [576, 768, 992, 1200];
const mediaQueries = breakpoints.map(bp => `@media (max-width: ${bp}px)`);

export const [MOBILE, TABLET, LAPTOP, DESKTOP] = mediaQueries;

export const Container = styled.div`
  width: ${breakpoints[1]}px;
  margin: 0 auto;

  ${TABLET} {
    width: 100%;
  }
`;

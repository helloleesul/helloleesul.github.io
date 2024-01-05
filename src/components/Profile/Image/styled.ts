import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import { TABLET } from '~/styles/common';

export const ImageWrapper = styled(GatsbyImage)`
  width: 100px;
  height: 100px;
  border-radius: 50%;

  ${TABLET} {
    width: 80px;
    height: 80px;
  }
`;

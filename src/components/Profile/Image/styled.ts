import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import { TABLET } from '~/styles/common';

export const ImageWrapper = styled(GatsbyImage)`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;

  ${TABLET} {
    width: 80px;
    height: 80px;
  }
`;

import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import theme from '~/styles/theme';

export const ImageWrapper = styled(GatsbyImage)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 0px 0px 15px -5px ${theme.PALETTE.gray300};
`;

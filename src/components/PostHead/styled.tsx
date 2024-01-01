import styled from '@emotion/styled';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { TABLET } from '~/styles/common';

type GatsbyImgProps = {
  image: IGatsbyImageData;
  alt: string;
  className?: string;
};

export const PostHeadWrapper = styled.div`
  position: relative;
  height: 400px;

  ${TABLET} {
    height: 300px;
  }
`;

export const BackgroundImage = styled((props: GatsbyImgProps) => (
  <GatsbyImage {...props} style={{ position: 'absolute' }} />
))`
  z-index: -1;
  width: 100%;
  height: 400px;
  object-fit: cover;
  filter: brightness(0.25);

  ${TABLET} {
    height: 300px;
  }
`;

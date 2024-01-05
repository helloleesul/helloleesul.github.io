import styled from '@emotion/styled';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { TABLET } from '~/styles/common';

type GatsbyImgProps = {
  image: IGatsbyImageData;
  alt: string;
  className?: string;
};

export const PostHeadWrapper = styled.div``;

export const BackgroundImage = styled((props: GatsbyImgProps) => (
  <GatsbyImage {...props} />
))`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 1rem;

  ${TABLET} {
    height: 300px;
  }
`;

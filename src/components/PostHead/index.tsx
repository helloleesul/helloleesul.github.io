import React from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';

import { PostHeadInfoProps } from '~/types/Post.types';
import PostHeadInfo from './Info';
import { PostHeadWrapper, BackgroundImage } from './styled';

type PostHeadProps = PostHeadInfoProps & {
  thumbnail: IGatsbyImageData;
};

export default function PostHead({
  title,
  date,
  categories,
  thumbnail,
}: PostHeadProps) {
  return (
    <PostHeadWrapper>
      <PostHeadInfo title={title} date={date} categories={categories} />
      <BackgroundImage image={thumbnail} alt="thumbnail" />
    </PostHeadWrapper>
  );
}

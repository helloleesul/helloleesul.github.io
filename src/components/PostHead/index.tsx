import React from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';

import { PostHeadInfoProps } from '~/types/Post.types';
import PostHeadInfo from './PostHeadInfo';
import { PostHeadWrapper, BackgroundImage } from './styled';

type PostHeadProps = PostHeadInfoProps & {
  thumbnail: IGatsbyImageData;
  readingTime: string;
};

export default function PostHead({
  title,
  date,
  categories,
  thumbnail,
  readingTime,
}: PostHeadProps) {
  return (
    <PostHeadWrapper>
      <PostHeadInfo
        title={title}
        date={date}
        categories={categories}
        readingTime={readingTime}
      />
      <BackgroundImage image={thumbnail} alt="thumbnail" />
    </PostHeadWrapper>
  );
}

import React from 'react';

import { PostFrontmatterType } from '~/types/Post.types';
import {
  PostItemWrapper,
  ThumbnailImage,
  PostItemContent,
  Title,
  Date,
  Category,
  CategoryItem,
  Summary,
} from './styled';

type PostItemProps = PostFrontmatterType & {
  link: string;
};

export default function PostItem({
  title,
  date,
  categories,
  summary,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
}: PostItemProps) {
  console.log(date);
  return (
    <PostItemWrapper to={link}>
      <ThumbnailImage image={gatsbyImageData} alt="Post Item Image" />

      <PostItemContent>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Category>
          {categories.map(category => (
            <CategoryItem key={category}>{category}</CategoryItem>
          ))}
        </Category>
        <Summary>{summary}</Summary>
      </PostItemContent>
    </PostItemWrapper>
  );
}

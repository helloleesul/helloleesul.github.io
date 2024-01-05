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
  Detail,
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
      <PostItemContent>
        <ThumbnailImage image={gatsbyImageData} alt="Post Item Image" />
        <Detail>
          <Category>
            {categories.map(category => (
              <CategoryItem key={category}>{category}</CategoryItem>
            ))}
          </Category>
          <Summary>{summary}</Summary>
        </Detail>
      </PostItemContent>
      <Date>{date}</Date>
      <Title>{title}</Title>
    </PostItemWrapper>
  );
}

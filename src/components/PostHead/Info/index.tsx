import React from 'react';
import {
  PostHeadInfoWrapper,
  PostData,
  Title,
  Date,
  Category,
  CategoryItem,
} from './styled';
import { PostHeadInfoProps } from '~/types/Post.types';

export default function PostHeadInfo({
  title,
  date,
  categories,
}: PostHeadInfoProps) {
  return (
    <PostHeadInfoWrapper>
      <Title>{title}</Title>
      <PostData>
        <Date>{date}</Date>
        <Category>
          {categories.map(category => (
            <CategoryItem key={category}>{category}</CategoryItem>
          ))}
        </Category>
      </PostData>
    </PostHeadInfoWrapper>
  );
}

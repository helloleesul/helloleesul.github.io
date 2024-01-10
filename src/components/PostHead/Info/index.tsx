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
  readingTime,
}: PostHeadInfoProps) {
  return (
    <PostHeadInfoWrapper>
      <Title>{title}</Title>
      <PostData>
        <div>
          <Date>{date}</Date>
          <span>{readingTime}</span>
        </div>
        <Category>
          {categories.map(category => (
            <li key={category}>
              <CategoryItem to={`/?category=${category}`}>
                {category}
              </CategoryItem>
            </li>
          ))}
        </Category>
      </PostData>
    </PostHeadInfoWrapper>
  );
}

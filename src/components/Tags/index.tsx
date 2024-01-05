import React from 'react';
import { TagListWrapper, TagItem } from './styled';
import { TagListProps } from '~/types/Tag.types';

export default function Tags({ selectedCategory, categoryList }: TagListProps) {
  return (
    <TagListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <TagItem
          to={`/?category=${name}`}
          active={name === selectedCategory}
          key={name}
        >
          {name}
          <span>{name === selectedCategory && `(${count})`}</span>
        </TagItem>
      ))}
    </TagListWrapper>
  );
}

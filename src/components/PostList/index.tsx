import React from 'react';

import useInfiniteScroll, {
  useInfiniteScrollType,
} from '~/hooks/useInfiniteScroll';

import { PostListItemType } from '~/types/Post.types';
import PostItem from './PostItem';
import { PostListWrapper } from './styled';

type PostListProps = {
  selectedCategory: string;
  posts: PostListItemType[];
};

export default function PostList({ selectedCategory, posts }: PostListProps) {
  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts,
  );

  return (
    <PostListWrapper ref={containerRef}>
      {postList.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter,
          },
        }: PostListItemType) => (
          <PostItem {...frontmatter} link={slug} key={id} />
        ),
      )}
    </PostListWrapper>
  );
}

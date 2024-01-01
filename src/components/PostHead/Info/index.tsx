import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { PostHeadInfoWrapper, PrevPageIcon, PostData, Title } from './styled';
import { PostHeadInfoProps } from '~/types/Post.types';

export default function PostHeadInfo({
  title,
  date,
  categories,
}: PostHeadInfoProps) {
  const goBackPage = () => window.history.back();

  return (
    <PostHeadInfoWrapper>
      <PrevPageIcon onClick={goBackPage}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </PrevPageIcon>
      <Title>{title}</Title>
      <PostData>
        <div>{categories.join(' / ')}</div>
        <div>{date}</div>
      </PostData>
    </PostHeadInfoWrapper>
  );
}

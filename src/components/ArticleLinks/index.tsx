import React from 'react';
import { ArticleWrapper } from './styled';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { PageContextType } from '~/types/Post.types';

export default function ArticleLinks({ prev, next }: PageContextType) {
  return (
    <ArticleWrapper>
      {prev && (
        <Link to={prev.fields.slug} className="prev">
          <div>
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>다음 글</span>
          </div>
          <p>{prev.frontmatter.title}</p>
        </Link>
      )}
      {next && (
        <Link to={next.fields.slug} className="next">
          <div>
            <span>이전 글</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
          <p>{next.frontmatter.title}</p>
        </Link>
      )}
    </ArticleWrapper>
  );
}

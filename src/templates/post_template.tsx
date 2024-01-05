import React from 'react';
import { Link, graphql } from 'gatsby';

import { PostFrontmatterType } from '~/types/Post.types';
import Layout from '~/layout';
import PostHead from '~/components/PostHead';
import PostContent from '~/components/PostContent';
import Comment from '~/components/Comment';
import Profile from '~/components/Profile';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import theme from '~/styles/theme';

const ArticleLinks = styled.div`
  display: flex;
  padding-bottom: 3rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${theme.PALETTE.gray300};
  gap: 15rem;
  > * {
    flex: 1;
    &:hover {
      text-decoration: underline;
    }
    > div {
      font-weight: bold;
      margin-bottom: 0.5rem;
      span {
        display: inline-block;
        margin: 0 1rem;
      }
    }
  }
  .prev {
    text-align: left;
  }
  .next {
    text-align: right;
  }
`;

type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[];
    };
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
      publicURL: string;
    };
  };
  location: {
    href: string;
  };
  pageContext: {
    prev: any;
    next: any;
  };
};

export type PostPageItemType = {
  node: {
    fields: { readingTime: { text: string } };
    html: string;
    frontmatter: PostFrontmatterType;
  };
};

export default function PostTemplate({
  data: {
    allMarkdownRemark: { edges },
    file,
  },
  location: { href },
  pageContext: { prev, next },
}: PostTemplateProps) {
  const {
    node: {
      fields: {
        readingTime: { text },
      },
      html,
      frontmatter: {
        title,
        summary,
        date,
        categories,
        thumbnail: {
          childImageSharp: { gatsbyImageData },
          publicURL,
        },
      },
    },
  } = edges[0];

  return (
    <Layout title={title} description={summary} url={href} image={publicURL}>
      <PostHead
        title={title}
        date={date}
        categories={categories}
        thumbnail={gatsbyImageData}
        readingTime={text}
      />
      <PostContent html={html} />
      <ArticleLinks>
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
      </ArticleLinks>
      <Profile profileImage={file?.childImageSharp?.gatsbyImageData} />
      <Comment />
    </Layout>
  );
}

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          fields {
            readingTime {
              text
            }
          }
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY-MM-DD")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
              publicURL
            }
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
      publicURL
    }
  }
`;

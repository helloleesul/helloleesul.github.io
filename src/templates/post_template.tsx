import React from 'react';
import { graphql } from 'gatsby';

import { PageContextType, PostFrontmatterType } from '~/types/Post.types';
import Layout from '~/layout';
import PostHead from '~/components/PostHead';
import PostContent from '~/components/PostContent';
import Comment from '~/components/Comment';
import Profile from '~/components/Profile';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import ArticleLinks from '~/components/ArticleLinks';
import TableOfContents from '~/components/TableOfContents';
import styled from '@emotion/styled';
import { TABLET } from '~/styles/common';
import ScrollToTop from '~/components/ScrollToTop';

const PostWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: 'article article article nav';
  gap: 2rem;
  > article {
    grid-area: article;
  }
  > nav {
    grid-area: nav;
  }
  ${TABLET} {
    display: block;
    nav {
      display: none;
    }
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
  pageContext: PageContextType;
};

export type PostPageItemType = {
  node: {
    tableOfContents: string;
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
  pageContext,
}: PostTemplateProps) {
  const {
    node: {
      tableOfContents,
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
      <PostWrapper>
        <article>
          <PostHead
            title={title}
            date={date}
            categories={categories}
            thumbnail={gatsbyImageData}
            readingTime={text}
          />
          <PostContent html={html} />
          <ArticleLinks {...pageContext} />
          <Profile profileImage={file?.childImageSharp?.gatsbyImageData} />
          <Comment />
        </article>
        <TableOfContents contents={tableOfContents} />
      </PostWrapper>
      <ScrollToTop />
    </Layout>
  );
}

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          tableOfContents
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

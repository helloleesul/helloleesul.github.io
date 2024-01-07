import { IGatsbyImageData } from 'gatsby-plugin-image';

export type PostFrontmatterType = {
  title: string;
  date: string;
  categories: string[];
  summary: string;
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
    publicURL: string;
  };
};

export type PostListItemType = {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: PostFrontmatterType;
  };
};

export type PostHeadInfoProps = {
  title: string;
  date: string;
  categories: string[];
  readingTime: string;
};

export type PageContextType = {
  [key: string]: {
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
    };
  };
};

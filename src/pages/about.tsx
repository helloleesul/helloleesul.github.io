import React from 'react';
import { graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import Layout from '~/layout';
import Profile from '~/components/Profile';

type AboutPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        siteUrl: string;
      };
    };
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
      publicURL: string;
    };
  };
};

export default function AboutPage({
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    file: {
      childImageSharp: { gatsbyImageData },
      publicURL,
    },
  },
}: AboutPageProps) {
  return (
    <Layout
      title={title}
      description={description}
      url={siteUrl}
      image={publicURL}
    >
      <Profile profileImage={gatsbyImageData} />
      about
    </Layout>
  );
}

export const getAbout = graphql`
  query getAbout {
    site {
      siteMetadata {
        title
        description
        siteUrl
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

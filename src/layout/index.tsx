import React from 'react';
import { Helmet } from 'react-helmet';
import { Global, ThemeProvider } from '@emotion/react';

import Footer from '~/components/Footer';
import Header from '~/components/Header';
import theme from '~/styles/theme';
import global from '~/styles/global';
import { Container } from '~/styles/common';

type LayoutProps = {
  title: string;
  description: string;
  url: string;
  image: string;
  children: React.ReactNode;
};

export default function Layout({
  title,
  description,
  url,
  image,
  children,
}: LayoutProps) {
  return (
    <>
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="@사용자이름" />
        <meta name="twitter:creator" content="@사용자이름" />

        <html lang="ko" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Container>
          <Header title="leesulog." />
          <main>{children}</main>
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
}

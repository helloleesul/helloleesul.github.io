import React from 'react';
import { Helmet } from 'react-helmet';
import { Global, ThemeProvider } from '@emotion/react';

import Footer from '~/components/Footer';
import Header from '~/components/Header';
import theme from '~/styles/theme';
import global from '~/styles/global';
import { Background, Container } from '~/styles/common';
import { ThemeContextProvider } from '~/context/ThemeContextProvider';

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

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <html lang="ko" />
      </Helmet>
      <Global styles={global} />
      <ThemeProvider theme={theme}>
        <ThemeContextProvider>
          <Background>
            <Container>
              <Header title="leesulog." />
              <main>{children}</main>
              <Footer />
            </Container>
          </Background>
        </ThemeContextProvider>
      </ThemeProvider>
    </>
  );
}

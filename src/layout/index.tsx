import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Global, ThemeProvider } from '@emotion/react';

import Footer from '~/components/Footer';
import Header from '~/components/Header';
import theme from '~/styles/theme';
import global from '~/styles/global';
import { Background, Container } from '~/styles/common';
import { ThemeContextProvider } from '~/context/ThemeContextProvider';
import ScrollToTop from '~/components/ScrollToTop';

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
  const topRef = useRef<HTMLHeadingElement>(null);
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

        <meta
          name="google-site-verification"
          content="2ZuLbEonDvmSVroBj8K7OgYWA2aJa67ahcigdZ4iNp0"
        />
        <meta
          name="naver-site-verification"
          content="52642daf5d30c3e17bff29171779f6bbdf9599c6"
        />

        <html lang="ko" />
      </Helmet>
      <Global styles={global} />
      <ThemeProvider theme={theme}>
        <ThemeContextProvider>
          <Background>
            <Container>
              <Header title="leesulog." ref={topRef} />
              <main>{children}</main>
              <Footer />
              <ScrollToTop
                onClick={() =>
                  topRef.current?.scrollIntoView({ behavior: 'smooth' })
                }
              />
            </Container>
          </Background>
        </ThemeContextProvider>
      </ThemeProvider>
    </>
  );
}

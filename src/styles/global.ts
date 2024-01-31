import { css } from '@emotion/react';
import theme from './theme';
import { THEME_TRANSITION } from './common';

const global = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'NotoSansKR', 'Montserrat', sans-serif;
    &::selection {
      background: ${theme.PALETTE.yellow};
      color: highlighttext;
    }
  }

  html {
    scroll-behavior: smooth;
  }

  html,
  body {
    height: 100%;
    ${THEME_TRANSITION}
  }

  #___gatsby {
    height: 100%;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  body.dark {
    --color: ${theme.PALETTE.white};
    --background: ${theme.PALETTE.gray600};

    ::-webkit-scrollbar-track {
      background: ${theme.PALETTE.gray600};
    }

    ::-webkit-scrollbar-thumb {
      background: ${theme.PALETTE.gray700};
    }

    #mode-item {
      .light {
        transform: translate(1.7rem, -50%);
      }
      .dark {
        transform: translate(1.3rem, 0) scale(1);
      }
    }

    #MarkdownRenderer {
      a,
      *:not(pre) > code[class*='language-'] {
        color: cornflowerblue;
      }
      th,
      hr {
        background: ${theme.PALETTE.gray500};
      }
    }
  }

  body.light {
    --color: ${theme.PALETTE.gray600};
    --background: ${theme.PALETTE.white};

    ::-webkit-scrollbar-track {
      background: ${theme.PALETTE.white};
    }

    ::-webkit-scrollbar-thumb {
      background: ${theme.PALETTE.gray200};
    }

    #MarkdownRenderer {
      a,
      *:not(pre) > code[class*='language-'] {
        color: lightcoral;
      }
      th,
      hr {
        background: ${theme.PALETTE.gray200};
      }
    }
  }

  #MarkdownRenderer {
    *:not(pre) > code[class*='language-'] {
      background: transparent;
    }
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  pre,
  code {
    * {
      font-family: inherit;
    }
  }

  .gatsby-highlight-code-line {
    background-color: #feb;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid #f99;
  }
`;

export default global;

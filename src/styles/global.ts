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
      a {
        color: ${theme.PALETTE.yellow};
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

  .gatsby-highlight pre[class*='language-'] {
    // background-color: transparent;
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left; /* 1 */
    min-width: 100%; /* 2 */
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

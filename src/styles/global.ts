import { css } from '@emotion/react';
import theme from './theme';

const global = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'NotoSansKR', 'Montserrat', sans-serif;
  }

  html,
  body {
    height: 100%;
    background-color: var(--background);
    color: var(--color);
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
    --background: ${theme.PALETTE.gray700};

    ::-webkit-scrollbar-track {
      background: ${theme.PALETTE.gray200};
    }

    ::-webkit-scrollbar-thumb {
      background: ${theme.PALETTE.white};
    }
  }

  body.light {
    --color: ${theme.PALETTE.gray700};
    --background: ${theme.PALETTE.white};

    ::-webkit-scrollbar-track {
      background: ${theme.PALETTE.gray200};
    }

    ::-webkit-scrollbar-thumb {
      background: ${theme.PALETTE.gray700};
    }
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
`;

export default global;

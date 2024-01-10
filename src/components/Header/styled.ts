import styled from '@emotion/styled';
import { TABLET } from '~/styles/common';
import theme from '~/styles/theme';

export const HeaderWrapper = styled.header`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-style: italic;
  font-size: 2rem;
  font-weight: 800;
  &:hover {
    text-decoration: underline;
  }
  ${TABLET} {
    font-size: 2rem;
  }
`;

export const ThemeSwitch = styled.div`
  cursor: pointer;
  position: relative;
  border-radius: 2rem;
  overflow: hidden;
  #mode-bg {
    background-color: ${theme.PALETTE.gray500};
    width: 4rem;
    height: 2rem;
  }
  #mode-item {
    font-size: 0;
    > * {
      width: 1.3rem;
      height: 1.3rem;
      position: absolute;
      margin: 0 8px;
      border-radius: 100%;
      transition: all 0.2s;
    }
    .light {
      background-color: ${theme.PALETTE.yellow};
      top: 50%;
      transform: translate(0, -50%);
    }
    .dark {
      background-color: ${theme.PALETTE.gray500};
      top: 0;
      transform: translate(-1.3rem, -0.3rem) scale(0.3);
    }
  }
  input {
    display: none;
  }
`;

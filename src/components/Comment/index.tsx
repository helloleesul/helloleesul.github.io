import React, { createRef, useEffect } from 'react';
import { CommentWrapper } from './styled';
import { useThemeContext } from '~/context/ThemeContextProvider';

const src = 'https://giscus.app/client.js';
const dataRepo = 'helloleesul/helloleesul.github.io';

export default function CommentWidget() {
  const element = createRef<HTMLDivElement>();
  const { theme } = useThemeContext();

  useEffect(() => {
    if (element.current === null) return;

    const giscus: HTMLScriptElement = document.createElement('script');

    const attributes = {
      src,
      'data-repo': dataRepo,
      'data-repo-id': 'R_kgDOK2JRmA',
      'data-category': 'General',
      'data-category-id': 'DIC_kwDOK2JRmM4CcN0b',
      'data-mapping': 'pathname',
      'data-strict': '0',
      'data-reactions-enabled': '1',
      'data-emit-metadata': '0',
      'data-input-position': 'bottom',
      'data-theme': theme === 'dark' ? 'dark_dimmed' : 'light',
      'data-lang': 'ko',
      crossorigin: 'anonymous',
      async: 'true',
    };

    Object.entries(attributes).forEach(([key, value]) => {
      giscus.setAttribute(key, value);
    });

    element.current.appendChild(giscus);
  }, [theme]);

  return <CommentWrapper ref={element} />;
}

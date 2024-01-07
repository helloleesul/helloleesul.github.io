import React, { createRef, useEffect } from 'react';
import { CommentWrapper } from './styled';
import { useDarkModeContext } from '~/utils/DarkModeContext';

const src = 'https://giscus.app/client.js';
const dataRepo = 'helloleesul/helloleesul.github.io';

type GiscusAttributesType = {
  src: string;
  'data-repo': string;
  'data-repo-id': string;
  'data-category': string;
  'data-category-id': string;
  'data-mapping': string;
  'data-strict': string;
  'data-reactions-enabled': string;
  'data-emit-metadata': string;
  'data-input-position': string;
  'data-theme': string;
  'data-lang': string;
  crossorigin: string;
  async: string;
};

export default function CommentWidget() {
  const element = createRef<HTMLDivElement>();
  const { darkMode } = useDarkModeContext();

  useEffect(() => {
    if (element.current === null) return;

    const giscus: HTMLScriptElement = document.createElement('script');

    const attributes: GiscusAttributesType = {
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
      'data-theme': darkMode ? 'dark_dimmed' : 'light',
      'data-lang': 'ko',
      crossorigin: 'anonymous',
      async: 'true',
    };

    Object.entries(attributes).forEach(([key, value]) => {
      giscus.setAttribute(key, value);
    });

    element.current.appendChild(giscus);
  }, [darkMode]);

  return <CommentWrapper ref={element} />;
}

import React from 'react';
import { TOCWrapper } from './styled';

export default function TableOfContents(props: { contents: string }) {
  return (
    <TOCWrapper>
      <div id="table-on-contents">
        <p>Contents</p>
        <div dangerouslySetInnerHTML={{ __html: props.contents }} />
      </div>
    </TOCWrapper>
  );
}

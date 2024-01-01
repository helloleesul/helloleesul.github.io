import React from 'react';
import { MarkdownRenderer } from './styled';

interface PostContentProps {
  html: string;
}

export default function PostContent({ html }: PostContentProps) {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />;
}

import React from 'react';
import { FooterWrapper } from './styled';

export default function Footer() {
  return (
    <FooterWrapper>
      © {new Date().getFullYear()}. leesul all rights reserved.
    </FooterWrapper>
  );
}

import React from 'react';
import { HeaderWrapper, Title } from './styled';
import { Link } from 'gatsby';

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <HeaderWrapper>
      <Title>
        <h1>
          <Link to="/">{title}</Link>
        </h1>
      </Title>
    </HeaderWrapper>
  );
}

import React from 'react';
import { HeaderWrapper, Circle, Title } from './styled';

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <HeaderWrapper>
      <Title>
        <Circle />
        <h1>{title}</h1>
      </Title>
    </HeaderWrapper>
  );
}

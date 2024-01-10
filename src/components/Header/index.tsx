import React from 'react';
import { HeaderWrapper, Title, ThemeSwitch } from './styled';
import { Link } from 'gatsby';
import { useThemeContext } from '~/context/ThemeContextProvider';

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  const { theme, onChangeTheme } = useThemeContext();

  return (
    <HeaderWrapper>
      <Title>
        <Link to="/">{title}</Link>
      </Title>
      <ThemeSwitch onClick={onChangeTheme}>
        <div id="mode-bg"></div>
        <div id="mode-item" className={theme === 'dark' ? 'on' : 'off'}>
          <span id="light">light</span>
          <span id="dark">dark</span>
        </div>
      </ThemeSwitch>
    </HeaderWrapper>
  );
}

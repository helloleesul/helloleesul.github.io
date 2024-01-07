import React from 'react';
import { HeaderWrapper, Title, ThemeSwitch } from './styled';
import { Link } from 'gatsby';
import { useDarkModeContext } from '~/utils/DarkModeContext';

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  const { darkMode, toggleDarkMode } = useDarkModeContext();

  return (
    <HeaderWrapper>
      <Title>
        <Link to="/">{title}</Link>
      </Title>
      <ThemeSwitch onClick={toggleDarkMode}>
        <div id="mode-bg"></div>
        <div id="mode-item" className={darkMode ? 'on' : 'off'}>
          <span id="light">light</span>
          <span id="dark">dark</span>
        </div>
      </ThemeSwitch>
    </HeaderWrapper>
  );
}

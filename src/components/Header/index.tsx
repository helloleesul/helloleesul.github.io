import React, { useState } from 'react';
import { HeaderWrapper, Title, ThemeSwitch } from './styled';
import { Link } from 'gatsby';

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  const [darkMode, setDarkMode] = useState(false);
  const onThemeSwitch = () => {
    setDarkMode(mode => !mode);
  };
  return (
    <HeaderWrapper>
      <Title>
        <Link to="/">{title}</Link>
      </Title>
      <ThemeSwitch onClick={onThemeSwitch}>
        <div id="mode-bg"></div>
        <div id="mode-item" className={darkMode ? 'on' : 'off'}>
          <span id="light">light</span>
          <span id="dark">dark</span>
        </div>
        <input type="checkbox" />
      </ThemeSwitch>
    </HeaderWrapper>
  );
}
